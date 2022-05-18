# Description

This package enables the user to have this app running and any one try to peek or any object obstructs camera the system get locked on its own

# Usage

```
index.js
--------

import virtualeye from "virtualeye";
import express from 'express';
const app = express();

app.get("/", function () {
    virtualeye(); 
})

```
```
npm install virtualeye express

node index.js 

open browser http://localhost:8081/capture

```
[![browser.jpg](https://i.postimg.cc/d1DrKcNP/browser.jpg)](https://postimg.cc/CBTzjXVm)

# License

MIT

