const shell = require('shelljs')
const clipboardy = require('clipboardy')
const sleep = ms => new Promise(resolve => setTimeout(ms, resolve))
module.exports = async () => {
  shell.cd('~')

  shell.exec('ssh cotilla@mng-39 -tt')
  await sleep(3000)
  shell.exec('ls')
  // shell.exec('cd /data1/logs/containers/nodecv')
}