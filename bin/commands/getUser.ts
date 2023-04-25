import * as Github from '../services/github/github'
import * as Database from '../services/database/database'

const getUser = async (user: string): Promise<void> => {
  const result = await Github.fetchUserInfo(user)
  result.languages = await Github.fetchUserLanguageRepos(user)

  await Database.upsertUser(result.login, result)
  console.info(`The data about user ${user} was storaged
   and here is the data=${JSON.stringify(result)}`)
}

export { getUser }
