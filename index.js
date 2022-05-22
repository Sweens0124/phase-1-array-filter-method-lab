// Code your solution here
function findMatching (drivers, name) {
  const filter = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
  return filter
}
function fuzzyMatch (drivers, name) {
  const filter = drivers.filter(driver => driver.toLowerCase().indexOf(name.toLowerCase()) === 0)
  return filter
}
function matchName (drivers, name) {
  const filter = drivers.filter(driver => driver.name === name)
  return filter
}