export const save = (K: string, V: string) => {
  localStorage.setItem(K, V)
}

export const get = (K: string) => {
  return localStorage.getItem(K)
}
