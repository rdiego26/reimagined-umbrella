const { removeDuplicates, removeEmptyValues } = require('../utils/utils')

const API_BASE_URL = 'https://api.github.com'

module.exports = {
  fetchUserInfo: async (userName) => {
    try {
      const URL = `${API_BASE_URL}/users/${userName}`
      const response = await fetch(URL)

      if (response.ok) {
        return await response.json()
      } else {
        const result = await response.json()
        throw new Error(`${result.message
          ? result.message
          : `Error! ${response.status}`}`)
      }
    } catch (error) {
      console.error(`Error getting info about user ${userName} 
      Message: ${error.message}`)
    }
  },
  fetchUserLanguageRepos: async (userName) => {
    try {
      const URL = `${API_BASE_URL}/users/${userName}/repos`
      const response = await fetch(URL)

      if (response.ok) {
        const result = await response.json()
        const languages = result.map((repo) => repo.language)
        const uniqueLanguages = removeDuplicates(languages)

        return removeEmptyValues(uniqueLanguages)
      } else {
        const result = await response.json()
        throw new Error(`${result.message
          ? result.message
          : `Error! ${response.status}`}`)
      }
    } catch (error) {
      console.error(`Error getting info about user repos ${userName} 
      Message: ${error.message}`)
    }
  }
}
