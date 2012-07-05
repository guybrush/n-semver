# n-semver - [semver] for [n]

* `npm install -g n`
* `npm install -g n-semver`
* in bash: ``n as `n-semver ~0.6` script.js``
* in package.json: 
    * `"dependencies":{"n-semver":"*"}`
    * `"scripts":{"start":"n as `node_modules/.bin/n-semver 0.6` server.js"}`
* in node: `require('n-semver')('<range>',function(err,data){})`
    
[semver]: https://github.com/isaacs/node-semver
[n]: https://github.com/visionmedia/n
