# intercom

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^6.10.0, npm ^3.10.10

### Developing

1. Run `npm install` to install dependencies.
2. Run `npm run lint` to start eslint.
3. Run `npm start` to start the development server. 
4. Open http://localhost:8080 in browser

## Build & development

Run `npm run build` for building.

## Integration
```javascript
<script>
    var myoptions = {name: 'foo'};

    (function(d, s, id, url){
      var js, ijs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)){ return; }
      js = d.createElement(s); js.id = id;
      js.onload = function(){
          window.initIntercom(myoptions);
      };
      js.src = url + "main.js";
      ijs.parentNode.insertBefore(js, ijs);
    }(document, 'script', 'intercom','//andreibak.github.io/'));
  </script>
```
