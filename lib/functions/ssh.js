const shell = require('shelljs')
const clipboardy = require('clipboardy')

const { mySshPass } = require('../../config')

shell.cd('~')

clipboardy.writeSync(mySshPass)
shell.exec('ssh-add .ssh/id_rsa')