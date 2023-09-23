export const getShortString = (str: string, maxLen: number) =>
  str.length > maxLen ? `${str.slice(0, maxLen - 1)}...` : str
