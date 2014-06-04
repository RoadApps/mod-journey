# RoadApps Journey Scheme

```bash
  $ npm install roadapps.mod-journey
```

## Usage

```js
  var mongoose = require('mongoose');
  var Schemas = require('roadapps.mod-journey')(mongoose);
  mongoose.connect('mongodb://localhost/heisenberg');
  Schemas.Travel.find({
    destination: 'SP'
  }, function(err, travels) {
    // some thing else
    travels.forEach(console.log.bind(console)); // whynot?
  });
```

## Schemas

* Travel
