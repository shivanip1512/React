# React

This repository is practice of Namaste React from Akshay Saini's course.

## Ep.01 - Inception

#### Setup React in App
- Get React CDN links
- Paste it in your application

### React Basics :

`const obj = React.createElement(Tag, Attributes, Childrens)`, _here obj.props is Attributes + Childrens_

Manipulate element with id **#root** :
```
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(obj);
```

⚠ Note : render replaces everything inside selected DOM element.
