const shell = require('shelljs')
const clipboardy = require('clipboardy')

const { mySshPass } = require('../../config')

module.exports = () => {
  shell.cd('~')

  clipboardy.writeSync(mySshPass)
  shell.exec('ssh-add .ssh/id_rsa')
}