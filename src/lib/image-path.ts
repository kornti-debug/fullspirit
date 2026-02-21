export function getImagePath(imagePath: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/fullspirit' : ''
  return `${basePath}${imagePath}`
}
