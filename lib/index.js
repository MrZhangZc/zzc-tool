#! /usr/bin/env node
const { program } = require('commander')
const { ip, fy, cs, unicode, ssh, ali, ys } = require('./functions')

program
  .version('0.0.1')

program
  .command('ip')
  .description('获取本机id')
  .action(ip)

program
  .command('fy')
  .description('翻译')
  .action(fy)

program
  .command('cs')
  .arguments('<content>')
  .option('-u, --userId <int>')
  .action(cs)

program
  .command('unicode')
  .arguments('<content>')
  .action(unicode)

program
  .command('ssh')
  .description('执行ssh脚本')
  .action(ssh)

program
  .command('ali')
  .description('连接阿里云服务器')
  .action(ali)

program
  .command('ys')
  .description('压缩图片')
  .action(ys)

if (!process.argv[2]) program.help()
program.parse(process.argv)