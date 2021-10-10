/** @jsxImportSource theme-ui */

import React from 'react'
import {
  NumberCurrencies,
  NumberLocales,
  FormatterVariant,
  formatterFactory,
} from './formatter'
export { NumberLocales, NumberCurrencies }

interface FormattedNumberProps {
  value: number
  currency?: NumberCurrencies
  locale?: NumberLocales
  /** what kind of formatting apply */
  variant?: FormatterVariant
}

/**
 *
 * FormattedNumber component
 * Displays money, percentage, amount of users, downloads etc etc.
 *
 */
export const FormattedNumber: React.FC<FormattedNumberProps> = ({
  value,
  locale = NumberLocales.en,
  currency = NumberCurrencies.usd,
  variant = 'standard',
}) => {
  const formatter = formatterFactory(variant, { currency, locale })
  return <>{formatter.format(value)}</>
}
