# LARP

Lightweight Asynchronous Regex Project

LARP is a library that uses stored regex patterns and returns the pattern matches in a promise. You can also use URLs or filenames as the argument with an options parameter and LARP will parse the source code of the page or text from the file as arguments for the regex marching.  More powerful regex magic than a level 15 spell caster! 

## Usage

### Install

    npm install larp

#### Modules 
Import: `import * as larp from "./larp";`   
Require: `const larp = require("larp");`  

#### Matching
* Email Addresses
	* `email(arg: string, options?: config)`
	* Example match: *john.doe@example.com*
* URLS
	* `url(arg: string, options?: config)`
	* Example match: *http://www.example.com*
* IPv4 Addresses
	* `ipv4(arg: string, options?: config)`
	* Example match: *127.0.0.1*
* HTML src Attribute Values
	* `src(arg: string, options?: config)`
	* Example match: *~~src="~~ /javascripts/main.js ~~">~~*
* HTML href Attribute Values
	* `href(arg: string, options?: config)`
	* Example match: *~~href="~~ /examples" ~~>~~*

#### Config (optional)
* **url**
	* `{ url: true }`
	* Use argument as *URL* location and URL source will be matched. 
* **file**
	* `{ file: true }` 
	* Use argument as *file* location and file text will be matched. 

## Examples (basic)
The string argument specifies the text to be matched.  

```javascript
larp.email("Lorem ipsum john.doe@example.com dolor sit amet.");
    => Promise: [ 'john.doe@example.com' ]

larp.url("Lorem ipsum https://www.example.com dolor sit amet.");
    => Promise: [ 'https://www.example.com' ]

larp.ipv4("Lorem ipsum 127.0.0.1 dolor sit amet.");
    => Promise: [ '127.0.0.1' ]

larp.src("<h1>Lorem ipsum</h1><img src="unicorn.png"><h1>dolor sit amet.</h1>");
    => Promise: [ 'unicorn.png' ]

larp.href("<h1>Lorem ipsum</h1><a href="/unicorns.html">Unicorns</a><h1>dolor sit amet.</h1>");
    => Promise: [ '/unicorns.html' ]
```

## Examples (options)
The string argument specifies the filename when option { file: true } is provided: 

```javascript
larp.ipv4("sample.txt", { file: true })
	=> Promise: [ '127.0.0.1' ]
```

The string argument specifies the URL location when option { url : true } is provided:

```javascript
larp.href("http://www.example.com", { url: true })
	=> Promise: [ '/stylesheets/style.css', '/examples' ]
```


## Attribution

- URL Regex from [John Gruber](https://daringfireball.net/2010/07/improved_regex_for_matching_urls)
