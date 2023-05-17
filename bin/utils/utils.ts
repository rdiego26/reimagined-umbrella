const removeDuplicates = (arr: string[]): string[] => {
  return arr.reduce(function (acc: string[], curr: string) {
    if (!acc.includes(curr)) { acc.push(curr) }
    return acc
  }, [])
}

const removeEmptyValues = (arr: string[]): string[] => {
  return arr.filter((element: string) => {
    return element !== null && element !== undefined
  })
}

export = { removeDuplicates, removeEmptyValues }
