#! /usr/bin/env node
import { listByParam } from "./commands/types";

const appData = require('../package.json')
const { program } = require('commander')

import { getUser } from './commands/getUser'
import * as ListUserCommands from './commands/listUser'

program
  .name(appData.name)
  .description(appData.description)
  .version(appData.version)

program
  .command('user')
  .description('Option to fetch info about Github user')
  .argument('<user>', 'user to fetch info')
  .option('--user', 'user name')
  .action(async (param: string) => {
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
        const users = await ListUserCommands.listUser()
        console.info(`You have ${users.length} user(s) in database ${users}`)
    } catch (error) {
        console.error(`Error list users`, error)
    }
  })

program
    .command('listBy')
    .description('Option to display all users saved in database ' +
        'filtered by location and/or language')
    .option('--location [location]', 'location to filter users')
    .option('--language [language]', 'language to filter users')
    .action(async (params: listByParam) => {
        try {
            let users: any[] = []
            if (params?.location && params?.language) {
                users = await ListUserCommands.listUserByLocationAndLanguage(params?.location, params?.language)
            } else if (params?.location && !params?.language) {
                users = await ListUserCommands.listUserByLocation(params?.location)
            } else if (!params?.location && params?.language) {
                users = await ListUserCommands.listUserByLanguage(params?.language)
            }

            console.info(`You have ${users.length} user(s) in database with provided params ${users}`)
        } catch (error) {
            console.error(`Error list users by location and/or language`, error)
        }
    })

program
    .command('listByLocation')
    .description('Option to display all users saved in database filtered by location')
    .argument('<location>', 'location to filter users')
    .action(async (param: string) => {
        try {
            const users = await ListUserCommands.listUserByLocation(param)
            console.info(`You have ${users.length} user(s) in database who living in ${param} ${users}`)
        } catch (error) {
            console.error(`Error list users by location`, error)
        }
    })

program
    .command('listByLanguage')
    .description('Option to display all users saved in database filtered by language')
    .argument('<language>', 'location to filter users')
    .action(async (param: string) => {
        try {
            const users = await ListUserCommands.listUserByLanguage(param)
            console.info(`You have ${users.length} user(s) in database who know ${param} ${users}`)
        } catch (error) {
            console.error(`Error list users by language`, error)
        }
    })

program.parse()
