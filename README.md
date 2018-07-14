## svg2jsx

디자인팀으로부터 받은 svg파일을 개발팀에서 쓰는 Icon 컴포넌트로 변환하는 간단한 툴

### Installation
```
$ git clone https://github.com/minungHan/svg2jsx.git
$ cd svg2jsx
$ npm install -g
```
npm에 따로 등록을 하지는 않아서 `clone` 후 직접 `npm install` 하는 것으로 설치한다

### usage
```
$ grmsvg -h

  Usage: grmsvg [options]

  Options:

    -i, --image [image]  변환할 svg가 있는 경로 (default: ./)
    -p, --path [path]    변환된 jsx가 저장될 경로 (default: ./)

```

### example
```
$ grmsvg -i ./images -p ./results
```
