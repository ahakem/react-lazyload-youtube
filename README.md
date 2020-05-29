# react-lazyload-youtube

> Super lightweight LazyLoad YouTube Videos for faster page load and better performance

[![NPM](https://img.shields.io/npm/v/react-lazyload-youtube.svg)](https://www.npmjs.com/package/react-lazyload-youtube) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install react-lazyload-youtube
```
or 
```bash
yarn add react-lazyload-youtube
```
## Demo
[https://ahakem.github.io/react-lazyload-youtube/](https://ahakem.github.io/react-lazyload-youtube/)
## Usage

```jsx
import  Youtube  from 'react-lazyload-youtube'
import 'react-lazyload-youtube/dist/index.css'

const App = () => {
  return <Youtube width="640px" height="480px" videoId="mfxQy5A_tHs"/>
}
```

## Props
  * Available Props
    * `videoId` - string (Youtube Video ID)
    * `width` - string (value in `px` or any unit) defult value : 100%
    * `height` - string (value in `px` or any unit) defult value : 400px
    * `imgSize` - string (default, hqdefault, mqdefault, sddefault, maxresdefault) defult value : mqdefault

## License

MIT © [ahakem](https://github.com/ahakem)
