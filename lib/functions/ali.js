const shell = require('shelljs')
const clipboardy = require('clipboardy')

const { aliyunPass, aliaddress } = require('../../config')

module.exports = () => {
  shell.cd('~')

  clipboardy.writeSync(aliyunPass)
  shell.exec(`ssh ${aliaddress}`)
}