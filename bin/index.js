#! /usr/bin/env node
const appData = require('../package.json')
const { program } = require('commander')
const getUser = require('./commands/getUser')
const listUser = require('./commands/listUser');

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
    try {
        await getUser(param)
    } catch (error) {
     console.error(`Error during get user`, error);
    }
  })

program
  .command('list')
  .description('Option to display all data saved in database')
  .action(async () => {
    try {
        const users = await listUser();
        console.info(`You have ${users.length} in database=${users}`);
    } catch (error) {
        console.error(`Error list users`, error);
    }
  })

program.parse()
