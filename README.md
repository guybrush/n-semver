# n-semver - [semver] for [n]

in node: `require('n-semver')('<range>',function(err,data){console.log(data.versions,data.maxSatisfying)})`

in the shell:
```
  Usage:

      n-semver <version-range> [args ...]
      n-semver-version <version-range>

  Example: execute foo.js with the node-version which max-satisfies '~0.6'

      n-semver ~0.6 foo.js -p 3000

  Example: print max-satisfying installed node-version for '~0.6'

      n-semver-version ~0.6
```

[semver]: https://github.com/isaacs/node-semver
[n]: https://github.com/visionmedia/n
