/** @jsxImportSource theme-ui */

import React from 'react'
import type { ThemeUICSSObject } from 'theme-ui'
import { useTheme } from '../../theme'
import { SvgIcon } from '../SvgIcon'
import { ReactComponent as StarSVG } from 'ui-lib/assets/svg/star-fill-3.svg'
import { Button } from '../Button'

const DATA_STAR_INDEX_SELECTOR = 'data-star-index'

type RateValue = 1 | 2 | 3 | 4 | 5
interface RatingProps {
  /** ThemeUI styling object */
  sx?: ThemeUICSSObject
  value: number
  onChange: (value: RateValue) => void
}

/**
 *
 * Rating component
 *
 */
export const Rating: React.FC<RatingProps> = ({
  onChange,
  value,
  ...props
}) => {
  // todo: support of the half rating and hover
  const [rating, setRating] = React.useState(value)
  const { theme } = useTheme()

  const handleRateChange = React.useCallback(
    rate => {
      setRating(rate)
      onChange(rate)
    },
    [onChange],
  )

  const handleStarClick = React.useCallback(
    (e: React.MouseEvent) => {
      const idx = e.currentTarget.getAttribute(DATA_STAR_INDEX_SELECTOR)
      handleRateChange(idx)
    },
    [handleRateChange],
  )

  const getStarStyles = (isPositive: boolean) => {
    const PATH_SELECTOR = '& path'
    return {
      [PATH_SELECTOR]: {
        stroke: theme.colors.gray700,
        fill: isPositive ? theme.colors.gray700 : 'none',
      },
    }
  }

  const renderIcon = () => {
    const starValues = Array(5)
      .fill(false)
      .map((star, i) => rating - i >= 0)

    return starValues.map((isPositive, idx) => {
      return (
        <Button
          key={idx}
          variant="transparent"
          onClick={handleStarClick}
          {...{ [DATA_STAR_INDEX_SELECTOR]: idx }}
        >
          <SvgIcon Icon={StarSVG} sx={getStarStyles(isPositive)} />
        </Button>
      )
    })
  }

  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      {renderIcon()}
    </div>
  )
}
