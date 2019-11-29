import ansiParse from './ansi-parse'

const ENCODED_NEWLINE = /\r{0,1}\n(?!\u0008)/

// RegExp reference:
// http://jafrog.com/2013/11/23/colors-in-terminal.html
// https://en.wikipedia.org/wiki/ANSI_escape_code

export const split2Lines = str => str.split(ENCODED_NEWLINE)

export default log => {
  const stringLines = split2Lines(log)
  const stringLinesText = []
  stringLines.forEach(line => {
    if (!line) {
      return
    }
    stringLinesText.push(ansiParse(line))
  })
  return stringLinesText
}
