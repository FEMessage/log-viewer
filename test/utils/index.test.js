/**
 * 日志输出测试
 * 参考字符串来源：https://api.travis-ci.com/v3/job/196515104/log.txt
 */

import {
  split2Lines,
  removeControlTags,
  removeEraseInLineFlag
} from '@/utils/index.js'

describe('src/utils/index.js', () => {
  it('根据换行符切割字符串', () => {
    const str =
      'It should be split two lines.\n' + 'It should be split two lines.'
    const result = split2Lines(str)

    expect(result[0]).toBe('It should be split two lines.')
    expect(result[1]).toBe('It should be split two lines.')
  })

  it('去除开头的控制符', () => {
    const strs = [
      '\x1b[34m test START_CONTROL Reg "\\x1b[34m"',
      '\x1b[31;1m test START_CONTROL Reg "\\x1b[31;1m"',
      '\x1b[30;3m\x1b[32;4m test START_CONTROL Reg "\\x1b[30;3m\\x1b[32;4m"'
    ]

    expect(removeControlTags(strs[0])).toBe(
      ' test START_CONTROL Reg "\\x1b[34m"'
    )
    expect(removeControlTags(strs[1])).toBe(
      ' test START_CONTROL Reg "\\x1b[31;1m"'
    )
    expect(removeControlTags(strs[2])).toBe(
      ' test START_CONTROL Reg "\\x1b[30;3m\\x1b[32;4m"'
    )
  })

  it('去除尾部的控制符', () => {
    const str = removeControlTags('\x1b[0m test remove end tag "\\x1b[0m"')
    expect(str).toBe(' test remove end tag "\\x1b[0m"')
  })

  it('删除K控制符之前的同一行内容', () => {
    const strs = [
      'Remove \x1b[K ERASE_IN_LINE_FLAG tag is in this line but it has been removed',
      'There is no loading in this line',
      'The ERASE_IN_LINE_FLAG tag is at last \x1b[0K',
      "The ERASE_IN_LINE_FLAG tag \x1b[1K is at middle but now it's been removed the words before 'is'"
    ]

    expect(removeEraseInLineFlag(strs[0])).toBe(
      ' ERASE_IN_LINE_FLAG tag is in this line but it has been removed'
    )
    expect(removeEraseInLineFlag(strs[1])).toBe(
      'There is no loading in this line'
    )
    expect(removeEraseInLineFlag(strs[2])).toBe('')
    expect(removeEraseInLineFlag(strs[3])).toBe(
      " is at middle but now it's been removed the words before 'is'"
    )
  })

  it('删除光标控制符', () => {
    const str = removeControlTags(
      '\x1b[?25h test remove POPULAR_PRIVATE_SEQUENCES tag "\\x1b[?25h"'
    )
    expect(str).toBe(' test remove POPULAR_PRIVATE_SEQUENCES tag "\\x1b[?25h"')
  })
})
