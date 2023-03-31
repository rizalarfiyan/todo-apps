export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

export const routeReplace = (
  path: string,
  ...url: (string | number)[]
): string => {
  const data = Array.from(path.matchAll(/:[^\\/]+/g), (m) => m[0])
  return data.reduce((acc, val, idx) => {
    if (url?.[idx]) {
      return acc.replace(val, url[idx].toString())
    }
    return acc
  }, path)
}
