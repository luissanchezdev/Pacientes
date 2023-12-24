import images from './images'
import { COLORS } from './theme'

const dateCurrent = new Date()
const dayWithoutFormatted = dateCurrent.getDate()
const day = dayWithoutFormatted < 10 ? `0${dayWithoutFormatted}` : dayWithoutFormatted
const month = dateCurrent.getMonth()
const year = dateCurrent.getFullYear()
const currentDate = `${year}-${month}-${day}`

export {
    images,
    COLORS,
    currentDate
}