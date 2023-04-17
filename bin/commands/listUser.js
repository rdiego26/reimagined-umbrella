const {
  fetchUsers, fetchUsersByLocation,
  fetchUsersByLanguage
} = require('../services/database')

const decorate = (data) => {
  return data.username
}

const listUser = async () => {
  const allData = await fetchUsers()
  return allData.map(decorate)
}

const listUserByLocation = async (location) => {
  const allData = await fetchUsersByLocation(location)
  return allData.map(decorate)
}

const listUserByLanguage = async (language) => {
  const allData = await fetchUsersByLanguage(language)
  return allData.map(decorate)
}

module.exports = { listUser, listUserByLocation, listUserByLanguage }
