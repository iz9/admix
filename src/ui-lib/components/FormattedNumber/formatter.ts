export enum NumberCurrencies {
  usd = 'usd',
}

export enum NumberLocales {
  en = 'en',
}

export type FormatterConfig = {
  locale: NumberLocales
  currency?: NumberCurrencies
}

export type FormatterVariant = 'currency' | 'standard' | 'compact' | 'percent'

export function formatterFactory(
  variant: FormatterVariant,
  { locale, currency }: FormatterConfig,
): Intl.NumberFormat {
  let options = {}
  switch (variant) {
    case 'currency':
      options = { style: 'currency', currency }
      break
    case 'percent':
      options = { style: 'unit', unit: 'percent' }
      break

    case 'compact':
      options = {
        notation: 'compact',
        maximumFractionDigits: 1,
      }
      break
    case 'standard':
    default:
      void 0
  }
  return new Intl.NumberFormat(locale, options)
}
