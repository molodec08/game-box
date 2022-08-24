export function getYear (date) {
  if (date) {
    return new Date(date).getFullYear()
  }
  return new Date().getFullYear()
}