#! /usr/bin/env node
const { program } = require('commander')
const { ip, fy, cs, unicode } = require('./function')

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

if (!process.argv[2]) program.help()
program.parse(process.argv)