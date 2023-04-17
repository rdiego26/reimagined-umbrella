const { fetchUserInfo, fetchUserLanguageRepos } = require('../services/github')
const { upsertUser } = require('../services/database')

const getUser = async (user) => {
  const result = await fetchUserInfo(user)
  result.languages = await fetchUserLanguageRepos(user)

  await upsertUser(result.login, result)
  console.info(`The data about user ${user} was storaged
   and here is the data=${JSON.stringify(result)}`)
}

module.exports = getUser
