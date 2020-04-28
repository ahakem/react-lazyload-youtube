# react-lazyload-youtube

> LazyLoad YouTube Videos for faster page load and better performance

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
[Demo](https://ahakem.github.io/react-lazyload-youtube/)
## Usage

```jsx
import  Youtube  from 'react-lazyload-youtube'
import 'react-lazyload-youtube/dist/index.css'

const App = () => {
  return <Youtube width="640px" height="480px" videoId="mfxQy5A_tHs"/>
}
```
## Props
`videoId` = string (YouTube Video ID)
`width` = string (value in px or any unit)
`height` = string (value in px or any unit)

## License

MIT © [ahakim](https://github.com/ahakim)
