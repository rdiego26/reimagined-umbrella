#! /usr/bin/env node
const appData = require('../package.json')
const { program } = require('commander')
const getUser = require('./commands/getUser')

program
  .name(appData.name)
  .description(appData.description)
  .version(appData.version)

program
  .command('user')
  .description('Option to fetch info about Github user')
  .argument('<user>', 'user to fetch info')
  .option('--user', 'user name')
  .description('Fetch information about github user')
  .action(async (param) => {
    await getUser(param)
  })

program.parse()
