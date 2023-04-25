import { IDatabase, IMain } from 'pg-promise';
import { IUser } from "./types";

const pgp: IMain = require('pg-promise')({
  // Initialization Options
})

// Preparing the connection details:
const cn: string = 'postgres://postgres:postgres@localhost:35432/db'

// Creating a new database instance from the connection details:
const db: IDatabase<any> = pgp(cn)

const upsertUser = async (name: string, data: any): Promise<void> => {
  await db.none('INSERT INTO users(username, data, location) ' +
      'VALUES($1, $2:json, $3) ON CONFLICT(username) DO ' +
      'UPDATE SET data = $2:json, updated_at = NOW(), ' +
      'location = $3', [name, data, data?.location])
}

const fetchUsers = async (): Promise<IUser[]> => {
  return await db.any('SELECT * FROM users')
}

const fetchUsersByLocationAndLanguage = async(location: string, language: string): Promise<IUser[]> => {
  return await db.any('SELECT * FROM users WHERE location = $1 AND ' +
      'data->\'languages\' ? $2', [location, language])
}

const fetchUsersByLocation = async (location: string): Promise<IUser[]> => {
  return await db.any('SELECT * FROM users WHERE location = $1', [location])
}

const fetchUsersByLanguage = async (language: string): Promise<IUser[]> => {
  return await db.any('SELECT * FROM users WHERE ' +
      'data->\'languages\' ? $1', [language])
}

export {
  upsertUser,
  fetchUsers,
  fetchUsersByLocationAndLanguage,
  fetchUsersByLocation,
  fetchUsersByLanguage
}
