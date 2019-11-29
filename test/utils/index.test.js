/**
 * 日志输出测试
 * 参考字符串来源：https://api.travis-ci.com/v3/job/196515104/log.txt
 */

import {split2Lines} from '@/utils/index.js'

const getStrCharCodes = str => {
  let codes = []
  for (let i = 0; i < str.length; i++) {
    codes.push(str.charCodeAt(i))
  }
  return codes
}

describe('src/utils/index.js', () => {
  it('根据换行符切割字符串', () => {
    const str =
      'It should be split two lines.\n' + 'It should be split two lines.'
    const result = split2Lines(str)

    expect(result[0]).toBe('It should be split two lines.')
    expect(result[1]).toBe('It should be split two lines.')
  })

  it('当Backspace出现在换行符后不会切割字符串', () => {
    const str = 'It should be\n\u0008 only one line.'
    const result = split2Lines(str)
    let resultCharCode = getStrCharCodes(result[0])
    expect(result.length).toBe(1)
    expect([...resultCharCode]).toStrictEqual(getStrCharCodes(str))
  })
})
