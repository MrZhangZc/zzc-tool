const fs = require('fs')
const axios = require('axios')
const { url, base_url, account, password, login_url } = require('../config')
const cookie = require('./cookie.json')

const writeCookie = async () => {
  const res = await axios.post(login_url, {
    account,
    password
  })
  const originCookie = res.headers['set-cookie']
  const objData = {
    manager_id: +(originCookie[0].split('=')[1].split(';')[0]),
    staff_id: +(originCookie[1].split('=')[1].split(';')[0]),
  }
  fs.writeFileSync('./cookie.json', JSON.stringify(objData, null, 2))
  return objData
}

const sendInfo = async (userId, content, cookieData) => {
  const cookieInfo = cookieData !== '' ? cookieData : cookie
  const service = axios.create({
    baseURL: base_url,
    timeout: 5000,
    withCredentials: true,
    headers: { 
      "Cookie": `manager_id=${cookieInfo.manager_id}; staff_id=${cookieInfo.staff_id}`
    }
  })

  const data = {
    content: content,
    staff_id: `${cookieInfo.staff_id}`,
    user_id: userId
  }
  const res = await service.post(url, data)
  return res.data
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports = {
  writeCookie,
  sendInfo,
  sleep
}