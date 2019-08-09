# log-viewer

[![Build Status](https://badgen.net/travis/FEMessage/log-viewer/master)](https://travis-ci.com/FEMessage/log-viewer)
[![NPM Download](https://badgen.net/npm/dm/@femessage/log-viewer)](https://www.npmjs.com/package/@femessage/log-viewer)
[![NPM Version](https://badgen.net/npm/v/@femessage/log-viewer)](https://www.npmjs.com/package/@femessage/log-viewer)
[![NPM License](https://badgen.net/npm/license/@femessage/log-viewer)](https://github.com/FEMessage/log-viewer/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/log-viewer/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

日志查看组件，将终端日志内容展示在页面中

![1.gif](https://cdn.nlark.com/yuque/0/2019/gif/298847/1563414930214-34da6e0b-bdbe-4c59-b531-772afa146417.gif#align=left&display=inline&height=837&name=1.gif&originHeight=837&originWidth=1118&size=78547&status=done&width=1118)

[English](./README-en.md)

## Table of Contents

- [Features](#features)
- [Install](#install)
- [Usage](#usage)
- [Reference](#reference)
- [Performance](#performance)
  - [内存占用](#内存占用)
    - [item-mode](#item-mode)
    - [vfor-mode](#vfor-mode)
  - [render 耗时](#render-耗时)
    - [item-mode](#item-mode-1)
    - [vfor-mode](#vfor-mode-1)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [License](#license)

## Features

- 对日志流中特殊字符进行了处理
- 高性能，处理大量数据不卡顿
- 可自定义 loading 样式
- 可自动滚动到底部

[⬆ Back to Top](#table-of-contents)

## Install

```bash
yarn add @femessage/log-viewer
```

[⬆ Back to Top](#table-of-contents)

## Usage

```html
<log-viewer :log="log" :loading="isLoading" />
```

[⬆ Back to Top](#table-of-contents)

## Reference

- [thanks to react-lazylog](https://github.com/mozilla-frontend-infra/react-lazylog)
- [travis-ci logs](https://travis-ci.org/)
- [http://jafrog.com/2013/11/23/colors-in-terminal.html](http://jafrog.com/2013/11/23/colors-in-terminal.html)
- [https://en.wikipedia.org/wiki/ANSI_escape_code](https://en.wikipedia.org/wiki/ANSI_escape_code)

[⬆ Back to Top](#table-of-contents)

## Performance

虚拟滚动使用的是：[https://github.com/tangbc/vue-virtual-scroll-list](https://github.com/tangbc/vue-virtual-scroll-list)

内部实现使用的 item-mode，因为比  vfor-mode  性能更好。

### 内存占用

使用 100,000 条数据进行测试

#### item-mode

组件渲染前页面内存：36.5MB<br />组件渲染后内存：48MB<br />内存消耗：11.5MB<br />![图片.gif](https://cdn.nlark.com/yuque/0/2019/gif/298847/1563439757710-ffb3b170-839c-46ca-810e-06e041fe93bd.gif#align=left&display=inline&height=425&name=%E5%9B%BE%E7%89%87.gif&originHeight=425&originWidth=720&size=266064&status=done&width=720)

#### vfor-mode

组件渲染前页面内存：43MB<br />
组件渲染后内存：221MB<br />
内存消耗：178MB

![item-10e4.gif](https://cdn.nlark.com/yuque/0/2019/gif/298847/1563439644472-91058ae0-804e-4d03-bd9c-3cb116283a3c.gif#align=left&display=inline&height=425&name=item-10e4.gif&originHeight=425&originWidth=720&size=270167&status=done&width=720)

### render 耗时

使用 100,000 条数据进行测试

#### item-mode

render 时间：0.63ms<br />
patch 时间： 72.18ms<br />
总时间：72.85ms<br />
![item-1e5.gif](https://cdn.nlark.com/yuque/0/2019/gif/298847/1563849440263-9ee2e04b-eac3-49fc-8ec5-b4ac63f77f8b.gif#align=left&display=inline&height=540&name=item-1e5.gif&originHeight=540&originWidth=1081&size=175825&status=done&width=1081)

#### vfor-mode

render 时间：933.05ms<br />
patch 时间： 23.81ms<br />
总时间：956.86ms<br />
![v-for-1e5.gif](https://cdn.nlark.com/yuque/0/2019/gif/298847/1563849485762-ea08a525-f04c-4827-ab1d-5242d92b80ba.gif#align=left&display=inline&height=811&name=v-for-1e5.gif&originHeight=811&originWidth=1211&size=94294&status=done&width=1211)

[⬆ Back to Top](#table-of-contents)

## Contributing

For those who are interested in contributing to this project, such as:

- report a bug
- request new feature
- fix a bug
- implement a new feature

Please refer to our [contributing guide](https://github.com/FEMessage/.github/blob/master/CONTRIBUTING.md).

[⬆ Back to Top](#table-of-contents)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/snowlocked"><img src="https://avatars0.githubusercontent.com/u/19562649?v=4" width="100px;" alt="snowlocked"/><br /><sub><b>snowlocked</b></sub></a><br /><a href="https://github.com/FEMessage/log-viewer/commits?author=snowlocked" title="Code">💻</a> <a href="https://github.com/FEMessage/log-viewer/commits?author=snowlocked" title="Documentation">📖</a> <a href="https://github.com/FEMessage/log-viewer/commits?author=snowlocked" title="Tests">⚠️</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

[⬆ Back to Top](#table-of-contents)

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
