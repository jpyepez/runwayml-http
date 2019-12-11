# RunwayML HTTP

RunwayML HTTP (RunwayHTTP) is a utility package that provides quick
and easy methods to post and request data from
[RunwayML](https://runwayml.com/).

## Demos
(Coming soon)

## Installation
`npm i --S runwayml-http`

## Usage (Node.js + npm)

Use the following syntax to add RunwayHTTP to the project:

```javascript
const RunwayHTTP = require('runway-http');

// OR alternative ES6 import syntax
import RunwayHTTP from 'runwayml-http';
```

In your selected RunwayML workspace, navigate to `Network` > `HTTP`
to check the HTTP server address port (`Server Address` default port
is `8000`). `Input Specification` also shows the correct data format
expected by RunwayML. 

![RunwayML HTTP](/runwayHTTP.jpg)

Send data to RunwayML:

```javascript
// Query server with port and data.
const captionData = { 'caption': 'Machine learning for creators' };
RunwayHTTP.query(8000, captionData);
```

The `query` method returns a response from RunwayML:

```javascript
// Query server and handle response using a Promise.
const captionData = { 'caption': 'Machine learning for creators' };
RunwayHTTP.query(8000, captionData)
    .then(res => console.log(res));
```

RunwayHTTP also includes `getData`, `getInfo`, and `getError` methods
that correspond to RunwayML's routes:

```javascript
// GET from /data route
RunwayHTTP.getData(8000).then(res => console.log('data:', res));

// GET from /info route
RunwayHTTP.getInfo(8000).then(res => console.log('info:', res));

// GET from /error route
RunwayHTTP.getError(8000).then(res => console.log('error:', res));
```


## Release Notes
### 1.0.0
* Initial Release

## Credits
This package has been implemented according to RunwayML's
documentation.
Author: [JP Yepez](https://www.instagram.com/jpyepez/)
