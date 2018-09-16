[![Build Status](https://travis-ci.org/pikax/swgoh.svg?branch=master)][travis]
[![npm version](https://badge.fury.io/js/swgoh.svg)][package]
[![Coverage Status](https://coveralls.io/repos/github/pikax/swgoh/badge.svg?branch=master)][coverage]
[![dependencies Status](https://david-dm.org/pikax/swgoh/status.svg)][dependencies]
[![devDependencies Status](https://david-dm.org/pikax/swgoh/dev-status.svg)][devDependencies]
[![Discord](https://img.shields.io/badge/discord-chat-blue.svg)][discord]
[![Known Vulnerabilities](https://snyk.io/test/npm/swgoh/badge.svg)][snyk]


[changelog](#changelog)


# INFORMATION *2018-09-16*
[swgoh][swgoh] is providing an API at [https://swgoh.gg/api/](https://swgoh.gg/api/), I strongly recommend using that, because this library currently is scrapping data from HTML.
I will probably move this library to use swgoh.gg API, but that will be a breaking change and not backwards compatible because the interface contract will change aka the data return will be different.



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

const allyCode= "495616697";
swgoh.profileAlly(allyCode).then(console.log);


const guild = "/g/232/requiem/"; // or {id:232}
swgoh.units(guild).then(console.log);

swgoh.guild(guild).then(console.log);

swgoh.mods(username).then(console.log);

// login
const user = {
    username: 'pikax',
    password: 'MySuperSecurePassword'
}

swgoh.login(user.username, user.password); //Promise<boolean>


//cached characters & ships
import {getCharacters, getShips} from 'swgoh';

```



### Get swogh.gg assets
The asset location by default is to [swogh/static/img][staticImg], but you can reset to swgoh.gg using
the environment config `USE_SWGOH_ASSET=1`

in code:
```javascript
process.env.USE_SWGOH_ASSET = 1;

import {swgoh} from 'swgoh';
```

### Get custom asset location
You can set a custom asset location by specifying it using environment config `SWGOH_ASSET_LOCATION={assetpath}`

in code
```javascript
process.env.SWGOH_ASSET_LOCATION = "https://assets.mysupawebsite.web/swgoh";

import {swgoh} from 'swgoh';
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


# KNOWN issues
[swgoh.gg][swgoh] is capping the number of mods you can get in your profile, I can't fix this without making breaking changes, you should use [swoghApi][swgohapi].


## [Unreleased]
- Toon info parsing
- Login support

# [0.7.1] 2018-09-16
- Trim toon description
- fix star count on ships

# [0.7.0] 2018-09-15 
- Update static and dependencies
- Remove `collectionScore` property from the contract, since swogh.gg doesn't provide it anymore
- Add `profileAlly(allyCode)` method, same as `profile(username)` but you pass the ally, `username` will be dropped.
- `username` is no longer `swgoh.gg` username, now is `playername`, username will be dropped.

# [0.6.0] 2018-08-26
- Add guild information [#14 - add guild information][i14]
- Update static and dependencies

# [0.5.11] 2018-07-14
- Cache for Characters & Ship stats
- Fix profile parser when the user doesn't have a guild [#13 - panelMenus nodeValue = null][i13]

# [0.4.10] 2018-06-29
- Cache for Characters & Ship stats
- Added playername to profile [#12 - swgoh.profile should return also the profile's character name][i10]

# [0.4.9] 2018-05-26
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
[swgohapi]: https://swgoh.gg/api/
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
[i12]: https://github.com/pikax/swgoh/issues/12
[i13]: https://github.com/pikax/swgoh/issues/13
[i14]: https://github.com/pikax/swgoh/issues/14


[staticImg]: https://github.com/pikax/swgoh/tree/master/static/img

[badgeFury]: https://badge.fury.io/js/swgoh
[travis]: https://travis-ci.org/pikax/swgoh
[package]: https://www.npmjs.com/package/swgoh
[coverage]: https://coveralls.io/github/pikax/swgoh?branch=master
[dependencies]: https://david-dm.org/pikax/swgoh
[devDependencies]: https://david-dm.org/pikax/swgoh?type=dev
[discord]: https://discord.gg/5HPbT5K
[snyk]: https://snyk.io/test/npm/swgoh
