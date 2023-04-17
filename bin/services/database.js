const pgp = require('pg-promise')({
  // Initialization Options
})

// Preparing the connection details:
const cn = 'postgres://postgres:postgres@localhost:35432/db'

// Creating a new database instance from the connection details:
const db = pgp(cn)

module.exports = {
  upsertUser: async (name, data) => {
    await db.none('INSERT INTO users(username, data, location) ' +
        'VALUES($1, $2:json, $3) ON CONFLICT(username) DO ' +
        'UPDATE SET data = $2:json, updated_at = NOW(), ' +
        'location = $3', [name, data, data?.location])
  },
  fetchUsers: async () => {
    return await db.any('SELECT * FROM users')
  },
  fetchUsersByLocation: async (location) => {
    return await db.any('SELECT * FROM users WHERE location = $1', [location])
  },
  fetchUsersByLanguage: async (language) => {
    return await db.any('SELECT * FROM users WHERE ' +
        'data->\'languages\' ? $1', [language])
  }
}
