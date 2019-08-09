# once.ts

## About

Once.ts is a micro-library that enables you to enforce a function can only be executed once. Once.js completely dependency-free and written in Typescript for AMD, Node.js and the Web. 
This is a typescript version of [once.js](https://github.com/daniellmb/once.js/) library.

## Examples

### TypeScript

```TypeScript
let foo = once(()=> console.log("Hello World!"));
foo(); // 'Hello World!'
foo(); // nothing

// with arguments
const callback = (a,b) => console.log(a+b);
const callOnce = once(callback);
callOnce(1,2)// 3
callOnce(2,4) // 3
```

## Install Choices
- `npm install once.ts`
- [download the zip](https://github.com/alfmoh/once.ts/archive/master.zip)
- [clone the repo](https://github.com/alfmoh/once.ts.git)

## License

(The MIT License)

[MIT License](https://alfmo.mit-license.org/)
