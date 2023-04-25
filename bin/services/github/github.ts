import { IRepo } from "./types";

const { removeDuplicates, removeEmptyValues } = require('../../utils/utils')

const API_BASE_URL: string = 'https://api.github.com'

const fetchUserInfo = async (userName: string): Promise<any> => {
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
  } catch (error: any) {
    console.error(`Error getting info about user ${userName} 
      Message: ${error.message}`)
  }
}

const fetchUserLanguageRepos = async (userName: string): Promise<string[] | undefined> => {
  try {
    const URL: string = `${API_BASE_URL}/users/${userName}/repos`
    const response: Response = await fetch(URL)

    if (response.ok) {
      const result: IRepo[] = await response.json()
      const languages: string[] = result.map((repo: IRepo) => repo.language)
      const uniqueLanguages: string[] = removeDuplicates(languages)

      return removeEmptyValues(uniqueLanguages)
    } else {
      const result = await response.json()
      throw new Error(`${result.message
          ? result.message
          : `Error! ${response.status}`}`)
    }
  } catch (error: any) {
    console.error(`Error getting info about user repos ${userName} 
      Message: ${error.message}`)
  }
}

export {
  fetchUserInfo,
  fetchUserLanguageRepos
}
