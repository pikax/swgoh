[![Build Status](https://travis-ci.org/pikax/swgoh.svg?branch=master)][travis]
[![npm version](https://badge.fury.io/js/swgoh.svg)][package]
[![Coverage Status](https://coveralls.io/repos/github/pikax/swgoh/badge.svg?branch=master)][coverage]
[![dependencies Status](https://david-dm.org/pikax/swgoh/status.svg)][dependencies]
[![devDependencies Status](https://david-dm.org/pikax/swgoh/dev-status.svg)][devDependencies]
[![Discord](https://img.shields.io/badge/discord-chat-blue.svg)][discord]
[![Known Vulnerabilities](https://snyk.io/test/npm/swgoh/badge.svg)][snyk]


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

// login
const user = {
    username: 'pikax',
    password: 'MysuperSecurePassword'
}

swgoh.login(user.username, user.password); //Promise<boolean>


//cached characters & ships
import {getCharacters, getShips} from 'swgoh';

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
- Toon info parsing
- Login support
- Add static images(toon/ships) to the static folder [#10 - Static resource links are not working][i10]

# [0.4.8] 2018-05-17
- Cache for Characters & Ship stats
- Fix [#8 - collection method not returning the full collection][i8]

# [0.4.7] 2018-04-26
- Cache for Characters (Bossk added)

# [0.4.6] 2018-04-12
- Fix [#6 - imageSrc is undefined][i6]

# [0.4.5] 2018-02-10
- Improved retrieving mods performance

# [0.4.4] 2018-02-10
- Added lastUpdatedUTC to profile [#5][i5]

# [0.4.2] 2018-02-08
- Updated cached files

# [0.4.1] 2018-01-07
- Cache for Characters & Ship stats 
- Added Jest Tests

# [0.3.2] 2017-12-02
- Fix [#4 Mods Lookup Failing][i4]

# [0.3.1] 2017-09-28
- Player mods collection

# [0.2.1] 2017-09-22
- Fix 7* ships not parse star correctly ([#3][i3])
- Added guild units fetch (Same as the [swgoh][swgoh] [guild unit API][swgohApiGuildUnit] )

# [0.1.3] 2017-09-20
- Fix "Profile Data undefined" when not showing AllyCode on Swgoh ([#2][i2])

# [0.1.2] 2017-09-20
- Added support for ships

# [0.1.1] 2017-08-19
- Fixed issue with stars when getting collection

# [0.1.0] 2017-08-19
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
[i5]: https://github.com/pikax/swgoh/issues/5
[i6]: https://github.com/pikax/swgoh/issues/6
[i7]: https://github.com/pikax/swgoh/issues/7
[i8]: https://github.com/pikax/swgoh/issues/8
[i10]: https://github.com/pikax/swgoh/issues/10


[staticImg]: https://github.com/pikax/swgoh/tree/master/static/img

[badgeFury]: https://badge.fury.io/js/swgoh
[travis]: https://travis-ci.org/pikax/swgoh
[package]: https://www.npmjs.com/package/swgoh
[coverage]: https://coveralls.io/github/pikax/swgoh?branch=master
[dependencies]: https://david-dm.org/pikax/swgoh
[devDependencies]: https://david-dm.org/pikax/swgoh?type=dev
[discord]: https://discord.gg/5HPbT5K
[snyk]: https://snyk.io/test/npm/swgoh
