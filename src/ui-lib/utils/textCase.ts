export enum TextCase {
  asIs,
  uppercase,
  lowercase,
}

export function convertCase(
  value: string,
  convertTo: TextCase = TextCase.asIs,
): string {
  switch (convertTo) {
    case TextCase.asIs:
      return value
    case TextCase.lowercase:
      return toLowerCase(value)
    case TextCase.uppercase:
      return toUppercase(value)
    default:
      return value
  }
}

export function toUppercase(value: string): string {
  return value.toUpperCase()
}

export function toLowerCase(value: string): string {
  return value.toLowerCase()
}
