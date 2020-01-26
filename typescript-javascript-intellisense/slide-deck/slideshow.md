---
marp: true
---

# Badass IntelliSense for Javascript

---

![image](https://github.com/belzeme/presentations/raw/master/typescript-javascript-intellisense/ressources/ts-inference.gif)

---

## IntelliSense features

- Quick Info
- Parameter Info
- List members
- Code completion

---

## But why ?

- Learn more about the code you're using
- Keep track of the parameters you're typing
- Add calls to properties and methods with only a few keystroke

---

## And more !

- It is a great motivation document your code thanks to JSDoc

![image](https://github.com/belzeme/presentations/raw/master/typescript-javascript-intellisense/ressources/dociument-your-code.gif)

---

## How to do it ?

- JavaScript IntelliSense can be provided for values in a **d.ts** file.

```typescript
declare interface Person {
  age: number;
  address: {
    street: string;
    zip: number;
  };
}
```

---

![image](https://github.com/belzeme/presentations/raw/master/typescript-javascript-intellisense/ressources/ts-inference.gif)

---

![image](https://media.giphy.com/media/3o7aTnQqygA3TcukFi/giphy.gif)
