import { isDef } from '../index'
import { isNumber } from '../validata/index'

export function suffixPx(value) {
  if (!isDef(value)) {
    return undefined
  }

  value = String(value)
  return isNumber(value) ? `${value}px` : value
}
