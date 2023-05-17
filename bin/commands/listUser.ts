import { type IUser } from '../services/github/types'

import * as Database from '../services/database/database'

const decorate = (data: IUser): string => {
  return data.username
}

const listUser = async (): Promise<string[]> => {
  const allData: IUser[] = await Database.fetchUsers()
  return allData.map(decorate)
}

const listUserByLocationAndLanguage =
    async (location: string, language: string): Promise<string[]> => {
      const allData: IUser[] =
      await Database.fetchUsersByLocationAndLanguage(location, language)
      return allData.map(decorate)
    }

const listUserByLocation =
    async (location: string): Promise<string[]> => {
      const allData: IUser[] =
      await Database.fetchUsersByLocation(location)
      return allData.map(decorate)
    }

const listUserByLanguage = async (language: string): Promise<string[]> => {
  const allData: IUser[] = await Database.fetchUsersByLanguage(language)
  return allData.map(decorate)
}

export {
  listUser,
  listUserByLocation,
  listUserByLanguage,
  listUserByLocationAndLanguage
}
