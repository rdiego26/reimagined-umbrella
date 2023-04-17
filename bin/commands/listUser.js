const { fetchUsers } = require('../services/database')

const listUser = async () => {
  const allData = await fetchUsers()
  return allData.map((user) => user.username)
}

module.exports = listUser
