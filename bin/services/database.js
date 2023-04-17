const pgp = require('pg-promise')({
  // Initialization Options
})

// Preparing the connection details:
const cn = 'postgres://postgres:postgres@localhost:35432/db'

// Creating a new database instance from the connection details:
const db = pgp(cn)

module.exports = {
  upsertUser: async (name, data) => {
    await db.none('INSERT INTO users(username, data) VALUES($1, $2) ON CONFLICT(username) DO ' +
        'UPDATE SET data = $2, updated_at = NOW()', [name, data]);
  }
}
