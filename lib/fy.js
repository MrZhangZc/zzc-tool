const Table = require('cli-table2')
const axios = require('axios')

const { yd_key } = require('../config')
const url = `http://fanyi.youdao.com/openapi.do?keyfrom=toaijf&key=${yd_key}&type=data&doctype=json&version=1.1`

module.exports = async (source, destination) => {
  const word = destination.args.join(' ')
  try{
    const res = await axios.get(url, { params: { q: word }})
    const result ={}
    if (res.data.basic) {
      result[word] = res.data['basic']['explains']
    } else if (data.translation) {
      result[word] = res.data['translation']
    } else {
      console.error('有点问题，要么再试试')
    }
    const table = new Table()
    table.push(result)
    console.log(table.toString())
  } catch(err){
    console.log('有点问题，要么再试试')
  }
}