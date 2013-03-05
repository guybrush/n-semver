# n-semver - [semver] for [n]

in node:

```
require('n-semver')('<range>',fn)
function fn(err, data) {console.log(data.versions, data.maxSatisfying)}
```

in the shell:
```
  Usage:

      n-semver <version-range> [args ...]
      n-semver-version <version-range>
      n-semver-npm <version-range>

  Example: execute foo.js with the node-version which max-satisfies '~0.8'

      n-semver ~0.8 foo.js -p 3000

  Example: print max-satisfying installed node-version for '~0.8'

      n-semver-version ~0.8

  Example: execute matching npm with the node-version which max-satisfies '~0.8'

      n-semver-npm ~0.8 install a-module-with-node-plugin
```

note: there is a [fork] of `n` which supports `node@<0.8.6` (i.e. no official
precompiled tarballs).

[semver]: https://github.com/isaacs/node-semver
[n]: https://github.com/visionmedia/n
[fork]: https://github.com/guybrush/n
