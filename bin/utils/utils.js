const removeDuplicates = (arr) => {
  return arr.reduce(function (acc, curr) {
    if (!acc.includes(curr)) { acc.push(curr) }
    return acc
  }, [])
}

const removeEmptyValues = (arr) => {
  return arr.filter((element) => {
    return element !== null && element !== undefined
  })
}

module.exports = { removeDuplicates, removeEmptyValues }
