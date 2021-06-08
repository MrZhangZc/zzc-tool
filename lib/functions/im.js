const path = require('path')

const { userId } = require('../../config')
const account = require('../../config/account')
const { writeCookie, sendIm } = require('../util')

const cookie = require(path.join(__filename, '../cookie.json'))

module.exports = async (content, options) => {
  const user = options.userId ? account.get(options.userId) || `${options.userId} ` : userId;
  try{
    let cookieData = ''
    if (!cookie.manager_id) cookieData = await writeCookie()

    const data = await sendIm(user, content, cookieData)
    if (data.state === 200 ) console.log('发送成功')
    
    if (data.state === 403) {
      cookieData = await writeCookie()
      const reData = await sendIm(user, content, cookieData)
      if(reData.state === 200) {
        console.log('发送成功')
      }
    }
  } catch(err) {
    console.log('发送失败', err)
  }
}