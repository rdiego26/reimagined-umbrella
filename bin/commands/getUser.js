const { fetchUserInfo, fetchUserLanguageRepos } = require('../services/github')
const { upsertUser } = require('../services/database')

const getUser = async (user) => {
  const result = await fetchUserInfo(user)
  const languages = await fetchUserLanguageRepos(user)
  result.languages = languages

  await upsertUser(result.login, result)
  console.info(`The data about user ${user} was storage
   and here is the data=${JSON.stringify(result)}`)
}

module.exports = getUser
