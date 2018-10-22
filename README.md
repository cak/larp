# larp.js

A live action regex parser

## Usage

### Install

    npm install larp

## Usage

```javascript
const larp = require("larp");

larp.email("Lorem ipsum john.doe@example.com dolor sit amet.");
//=> ['john.doe@example.com']

larp.url("Lorem ipsum https://www.example.com dolor sit amet.");
//=> ['https://www.example.com']

larp.ipv4("Lorem ipsum 127.0.0.1 dolor sit amet.");
//=> ['127.0.0.1']
```

## Attribution

- URL Regex from [John Gruber](https://daringfireball.net/2010/07/improved_regex_for_matching_urls)
