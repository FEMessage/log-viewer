const ENCODED_NEWLINE = /\r{0,1}\n/
const START_CONTROL = /\x1b\[((3[0-7])|(90)){0,1}(;{0,1}[134]){0,1}m/g
const END_CONTROL = /\x1b\[0m/g
const ERASE_IN_LINE_FLAG = /\x1b\[[0-2]{0,1}K/
const POPULAR_PRIVATE_SEQUENCES = /\x1b\[\?25[hl]/g

// RegExp reference:
// http://jafrog.com/2013/11/23/colors-in-terminal.html
// https://en.wikipedia.org/wiki/ANSI_escape_code

const controlTags = [START_CONTROL, END_CONTROL, POPULAR_PRIVATE_SEQUENCES]

export const split2Lines = str => str.split(ENCODED_NEWLINE)

// 初版只做删除控制符
export const removeControlTags = str => {
  controlTags.forEach(tag => {
    str = str.replace(tag, '')
  })
  return str
}

// 测试\x1b[[0-2]K和\x1b[K 将该行内容删除控制符
const hasEraseInLineFlag = str => {
  return ERASE_IN_LINE_FLAG.test(str)
}

// 执行删除该行控制符之前的内容
export const removeEraseInLineFlag = str => {
  const strLines = str.split(ERASE_IN_LINE_FLAG)
  const len = strLines.length
  // console.log(strLines);
  if (strLines[len - 1].trim()) {
    return strLines[len - 1]
  }
  return ''
}

export default log => {
  const stringLines = split2Lines(log)
  const stringLinesText = []
  stringLines.forEach(line => {
    if (!line) {
      return
    }
    if (hasEraseInLineFlag(line)) {
      line = removeEraseInLineFlag(line)
    }
    line = removeControlTags(line)
    stringLinesText.push(line)
  })
  return stringLinesText
}
