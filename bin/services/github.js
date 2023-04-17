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
  }
}
