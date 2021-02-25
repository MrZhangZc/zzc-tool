const os = require('os')
const clipboardy = require('clipboardy')

module.exports = () => {
  const interfaces = os.networkInterfaces()
  for (let devName in interfaces) {
    const iface = interfaces[devName]
    for (let i = 0; i < iface.length; i++) {
        const alias = iface[i]
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          clipboardy.writeSync(alias.address)
          console.log('已复制到剪贴板，直接粘贴即可')
        }
    }
  }
}