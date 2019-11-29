import ansiParse from '@/utils/ansi-parse.js'

describe('src/utils/ansi-parse.js', () => {
  it('解释日志字符串为可读数据', () => {
    const log =
      'normal\x1b[30mcolor is black\x1b[0m\x1b[31;1mcolor is red and bold is true\x1b[0m\x1b[32;3mcolor is green and italic is true\x1b[0m\x1b[33;4mcolor is yellow and underline is true\x1b[0m\x1b[30;47mcolor is black and background is white\x1b[0m\x1b[30;39mcolor is reset\x1b[0m\x1b[40;49mbackground is reset\x1b[0m\x1b[1;22mbold is false\x1b[0m\x1b[3;23mitalic is false\x1b[0m\x1b[4;24munderline is false\x1b[0m'
    const result = ansiParse(log)

    expect(result[0]).toStrictEqual({
      text: 'normal'
    })
    expect(result[1]).toStrictEqual({
      foreground: 'black',
      text: 'color is black'
    })
    expect(result[2]).toStrictEqual({
      foreground: 'red',
      bold: true,
      text: 'color is red and bold is true'
    })
    expect(result[3]).toStrictEqual({
      foreground: 'green',
      italic: true,
      text: 'color is green and italic is true'
    })
    expect(result[4]).toStrictEqual({
      foreground: 'yellow',
      underline: true,
      text: 'color is yellow and underline is true'
    })
    expect(result[5]).toStrictEqual({
      foreground: 'black',
      background: 'white',
      text: 'color is black and background is white'
    })
    expect(result[6]).toStrictEqual({
      text: 'color is reset'
    })
    expect(result[7]).toStrictEqual({
      text: 'background is reset'
    })
    expect(result[8]).toStrictEqual({
      bold: false,
      text: 'bold is false'
    })
    expect(result[9]).toStrictEqual({
      italic: false,
      text: 'italic is false'
    })
    expect(result[10]).toStrictEqual({
      underline: false,
      text: 'underline is false'
    })
  })
})
