[![Coverage Status](https://coveralls.io/repos/github/pikax/swgoh/badge.svg?branch=master)](https://coveralls.io/github/pikax/swgoh?branch=master)

[changelog](#changelog)

## Synopsis

Node library to get information of **swgoh** parsing [swgoh.gg][swgoh], you can get **profile**, **characters**, **guild members**, **ships**, **units** and **mods**.

## Code Example

### import
```javascript
const swgoh = require("swgoh").swgoh
//or
import {swgoh} from 'swgoh';
```


```javascript
const username= "pikax";
swgoh.profile(username).then(function (p) {
  console.log(p);

  return swgoh.guild(p.guildUrl);
}).then(console.log);
swgoh.collection(username).then(console.log);
swgoh.ship(username).then(console.log);


const guild = "/g/232/requiem/"; // or {id:232}
swgoh.units(guild).then(console.log);

swgoh.mods(username).then(console.log);



//cached characters & ships (no requests)
import {characters, ships} from 'swgoh';

```

## Motivation

With TB just released, this library provides easy way to get data from [swgoh.gg][swgoh]

## Installation

```bash
yarn add swgoh
```
```bash
npm i swgoh
```


# Changelog
All notable changes to this project will be documented in this file.

## [Unreleased]
- Cache for Characters & Ship stats 
- Added Jest Tests

# [0.3.2] - 2017-12-02
- Fix [#4 - Mods Lookup Failing][i4]

# [0.3.1] - 2017-09-28
- Player mods collection

# [0.2.1] - 2017-09-22
- Fix 7* ships not parse star correctly ([#3][i3])
- Added guild units fetch (Same as the [swgoh][swgoh] [guild unit API][swgohApiGuildUnit] )

# [0.1.3] - 2017-09-20
- Fix "Profile Data undefined" when not showing AllyCode on Swgoh ([#2][i2])

# [0.1.2] - 2017-09-20
- Added support for ships

# [0.1.1] - 2017-08-19
- Fixed issue with stars when getting collection

# [0.1.0] - 2017-08-19
- First release, support collection (toons), player info and guild info.


## License

[MIT][license]

## Disclaimer

The developer of this application does not have any affiliation with the Capital Games, Disney, Lucasfilm Limited or swgoh.gg.

[swgoh]: https://swgoh.gg
[license]: https://github.com/pikax/swgoh/blob/master/LICENSE
[swgohApiGuildUnit]: https://swgoh.gg/api/guilds/1/units/
[i2]: https://github.com/pikax/swgoh/issues/2
[i3]: https://github.com/pikax/swgoh/issues/3
[i4]: https://github.com/pikax/swgoh/issues/4