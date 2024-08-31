# React

This repository is practice of Namaste React from Akshay Saini's course.

## Ep.01 - Inception

#### Setup React in App
- Get React [CDN links](https://legacy.reactjs.org/docs/cdn-links.html)
- Paste it in your application

### React Basics :

`const obj = React.createElement(Tag, Attributes, Childrens)`, _here obj.props is Attributes + Childrens_

Manipulate element with id **#root** :
```
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(obj);
```

⚠ Note : render replaces everything inside selected DOM element.

## Ep.02 - Igniting our App

#### How to ignite our App ?
- Initialize package manager : `npm init` (gives package.json)
- install bundler : `npm install -D parcel`

package-lock.json 


## Ep.12 - Redux Toolkit
- Install libraries :
    - @reduxjs/toolkit
    - react-redux
- Build our store
- Connect our store to our app
- Create a slice (cartSlice)
- dispatch (action)
- Selector


## Deploy Minimised files to gh-pages
- Delete gh-pages branch if already present from github repository.
- Run `npm install gh-pages --save-dev`
- Run `npm run deploy`


## Types of testing (developer)
- Unit testing
- Integration testing
- End to End testing


# Setting up Testing in app
- Install React Testing Library
- Install jest
- Install Babel dependencies to be used with jest
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest Confirguration (run `npx jest --init`)
- Install `jest-env-jsdom` library, if jest version >= 28
- Install @babel/preset-react to make JSX work in test cases
- Include @babel/preset-react inside babel config
- Install @testing-library/jest-dom