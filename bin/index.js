#! /usr/bin/env node
const appData = require('../package.json')
const { program } = require('commander')
const getUser = require('./commands/getUser')
const { listUser, listUserByLocation, listUserByLanguage } = require('./commands/listUser');

program
  .name(appData.name)
  .description(appData.description)
  .version(appData.version)

program
  .command('user')
  .description('Option to fetch info about Github user')
  .argument('<user>', 'user to fetch info')
  .option('--user', 'user name')
  .action(async (param) => {
    try {
        await getUser(param)
    } catch (error) {
     console.error(`Error during get user`, error)
    }
  })

program
  .command('list')
  .description('Option to display all users saved in database')
  .action(async () => {
    try {
        const users = await listUser()
        console.info(`You have ${users.length} user(s) in database ${users}`)
    } catch (error) {
        console.error(`Error list users`, error)
    }
  })

program
    .command('listByLocation')
    .description('Option to display all users saved in database filtered by location')
    .argument('<location>', 'location to filter users')
    .option('--listByLocation', 'location')
    .action(async (param) => {
        try {
            const users = await listUserByLocation(param)
            console.info(`You have ${users.length} user(s) in database who living in ${param} ${users}`)
        } catch (error) {
            console.error(`Error list users by location`, error)
        }
    })

program
    .command('listByLanguage')
    .description('Option to display all users saved in database filtered by language')
    .argument('<language>', 'location to filter users')
    .option('--listByLanguage', 'language')
    .action(async (param) => {
        try {
            const users = await listUserByLanguage(param)
            console.info(`You have ${users.length} user(s) in database who know ${param} ${users}`)
        } catch (error) {
            console.error(`Error list users by language`, error)
        }
    })

program.parse()
