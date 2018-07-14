/* eslint-disable */
import { basename } from 'path';
import { load } from 'cheerio';
import { jar, defaults, cookie } from 'request';
import { resolve } from 'url';
import { isNumber } from 'util';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve$$1, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve$$1(result.value) : new P(function (resolve$$1) { resolve$$1(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

// TODO mode refactor this and prefix interfaces with I
var _a;
var GearLevel;
(function (GearLevel) {
    GearLevel[GearLevel["I"] = 1] = "I";
    GearLevel[GearLevel["II"] = 3] = "II";
    GearLevel[GearLevel["III"] = 3] = "III";
    GearLevel[GearLevel["IV"] = 4] = "IV";
    GearLevel[GearLevel["V"] = 5] = "V";
    GearLevel[GearLevel["VI"] = 6] = "VI";
    GearLevel[GearLevel["VII"] = 7] = "VII";
    GearLevel[GearLevel["VIII"] = 8] = "VIII";
    GearLevel[GearLevel["IX"] = 9] = "IX";
    GearLevel[GearLevel["X"] = 10] = "X";
    GearLevel[GearLevel["XI"] = 11] = "XI";
    GearLevel[GearLevel["XII"] = 12] = "XII";
})(GearLevel || (GearLevel = {}));
/* end user base*/
/*Mod*/
var ModSlot;
(function (ModSlot) {
    ModSlot[ModSlot["Transmitter"] = 0] = "Transmitter";
    ModSlot[ModSlot["Receiver"] = 1] = "Receiver";
    ModSlot[ModSlot["Processor"] = 2] = "Processor";
    ModSlot[ModSlot["HoloArray"] = 3] = "HoloArray";
    ModSlot[ModSlot["DataBus"] = 4] = "DataBus";
    ModSlot[ModSlot["Multiplexer"] = 5] = "Multiplexer";
})(ModSlot || (ModSlot = {}));
var ModSet;
(function (ModSet) {
    ModSet[ModSet["Health"] = 0] = "Health";
    ModSet[ModSet["Defense"] = 1] = "Defense";
    ModSet[ModSet["CriticalDamage"] = 2] = "CriticalDamage";
    ModSet[ModSet["CriticalChance"] = 3] = "CriticalChance";
    ModSet[ModSet["Tenacity"] = 4] = "Tenacity";
    ModSet[ModSet["Offense"] = 5] = "Offense";
    ModSet[ModSet["Potency"] = 6] = "Potency";
    ModSet[ModSet["Speed"] = 7] = "Speed";
})(ModSet || (ModSet = {}));
// todo probably replace this names on the enum
var TranslatedModName = (_a = {},
    _a[ModSlot.Transmitter] = "Square",
    _a[ModSlot.Receiver] = "Arrow",
    _a[ModSlot.Processor] = "Diamond",
    _a[ModSlot.HoloArray] = "Triangle",
    _a[ModSlot.DataBus] = "Circle",
    _a[ModSlot.Multiplexer] = "Cross",
    _a);
var ModPrimary;
(function (ModPrimary) {
    ModPrimary["Speed"] = "Speed";
    ModPrimary["CriticalChance"] = "Critical Chance";
    ModPrimary["CriticalDamage"] = "Critical Damage";
    ModPrimary["Potency"] = "Potency";
    ModPrimary["Tenacity"] = "Tenacity";
    ModPrimary["Accuracy"] = "Accuracy";
    ModPrimary["CriticalAvoidance"] = "Critical Avoidance";
    ModPrimary["Offense"] = "Offense";
    ModPrimary["Defense"] = "Defense";
    ModPrimary["Health"] = "Health";
    ModPrimary["Protection"] = "Protection";
})(ModPrimary || (ModPrimary = {}));
var ModSecondary;
(function (ModSecondary) {
    ModSecondary["Speed"] = "Speed";
    ModSecondary["CriticalChance"] = "Critical Chance";
    ModSecondary["Potency"] = "Potency";
    ModSecondary["Tenacity"] = "Tenacity";
    ModSecondary["Offense"] = "Offense";
    ModSecondary["Defense"] = "Defense";
    ModSecondary["Health"] = "Health";
    ModSecondary["Protection"] = "Protection";
    ModSecondary["Offense100"] = "Offense %";
    ModSecondary["Defense100"] = "Defense %";
    ModSecondary["Health100"] = "Health %";
    ModSecondary["Protection100"] = "Protection %";
})(ModSecondary || (ModSecondary = {}));

var parseModCollection = function ($) {
    var m = $("body > div.container.p-t-md > div.content-container > div.content-container-primary.mod-list > ul > li.media.list-group-item.p-a.collection-mod-list > div > div > div")
        .map(function (x) {
        var _$ = $(this);
        var tier = _$.find(".statmod-pip").length;
        var character = _$.find(".char-portrait-img").attr("alt");
        var level = _$.find(".statmod-level").text();
        var description = _$.find(".statmod-img").attr("alt");
        var mod = _$.find(".pc-statmod").first();
        /*
  export enum ModSlot {
    Transmitter,
    Receiver,
    Processor,
    HoloArray,
    DataBus,
    Multiplexer
  }*/
        var slot = mod.hasClass("pc-statmod-slot1") && ModSlot.Transmitter;
        slot = !slot && mod.hasClass("pc-statmod-slot2") && ModSlot.Receiver || slot;
        slot = !slot && mod.hasClass("pc-statmod-slot3") && ModSlot.Processor || slot;
        slot = !slot && mod.hasClass("pc-statmod-slot4") && ModSlot.HoloArray || slot;
        slot = !slot && mod.hasClass("pc-statmod-slot5") && ModSlot.DataBus || slot;
        slot = !slot && mod.hasClass("pc-statmod-slot6") && ModSlot.Multiplexer || slot;
        var primaryStat = _$.find(".statmod-stats-1");
        var secondaryStats = _$.find(".statmod-stats-2 > .statmod-stat");
        var primary = {
            type: primaryStat.find(".statmod-stat-label").text(),
            value: primaryStat.find(".statmod-stat-value").text(),
        };
        var secondary = secondaryStats.map(function (s) {
            var ss = $(this);
            return {
                type: ss.find(".statmod-stat-label").text(),
                value: ss.find(".statmod-stat-value").text(),
            };
        }).get();
        return {
            character: character,
            tier: tier,
            description: description,
            level: level,
            slot: TranslatedModName[slot],
            primary: primary,
            secondary: secondary,
        };
    }).get();
    return m;
};
var _MOD_PAGES_REGEX = /(?:of )(\d+)$/gm;
var getModPages = function ($) {
    var selector = 'li.media.list-group-item.p-a.collection-mod-list > div.pull-right > ul > li > a';
    var numPages = $(selector).text();
    /* const elements = $(selector);
 
     const e1 = elements[0]; //if first page
     const e2 = elements[1]; //if other pages
 
     let numPages = e1.children.length === 1
         ? e1.children[0].nodeValue
         : e2.children[0].nodeValue;*/
    var m = _MOD_PAGES_REGEX.exec(numPages);
    if (!m) {
        return null;
    }
    return +m[1];
};

var swgohAsset = "https://swgoh.gg/static/img/assets/";
var githubAsset = "https://raw.githubusercontent.com/pikax/swgoh/master/static/img/";
var assetLocation = process.env.SWGOH_ASSET_LOCATION || githubAsset;
var assetUrl = process.env.USE_SWGOH_ASSET && swgohAsset || assetLocation;

function parseShips($) {
    return $('body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.media.list-group-item.p-a.collection-char-list > div > div > div')
        .map(function (x) {
        var _$ = $(this);
        var na$ = _$.find('div.collection-ship-name > a'); //name
        var m$ = _$.find(".collection-ship-main"); //main
        var ship$ = m$.find('div.collection-ship-primary > div > a');
        var crew$ = m$.find('div.collection-ship-secondary');
        var gp$ = crew$.find("div.collection-char-gp");
        var gpTitle = gp$.attr("title");
        var gp = gpTitle
            ? gpTitle.replace(/,/g, '').match(/\d+/g) // fix points
            : [undefined, undefined, undefined];
        var stars = ship$.find("div.ship-portrait-full-star-inactive").length;
        var img = ship$.find(".ship-portrait-full-frame-img").attr("src");
        var crewMembers = crew$.find('.collection-ship-crew-member')
            .map(function (x) {
            var _$ = $(this);
            var na$ = _$.find(".char-portrait-full-link");
            var a$ = _$.find("a");
            var i$ = a$.find("img");
            var name = _$.find('.player-char-portrait').attr("title");
            var gl = a$.find("div.char-portrait-full-gear-level").text();
            // NOTE if the user doesn't have that crew member unlocked it should skip it
            if (!na$.attr("href"))
                return;
            var imgsrc = i$.attr("src").slice(2);
            return {
                code: na$.attr("href").match(/(?:\/(?:u\/.*\/|)collection\/)(.*)(?:\/)$/)[1],
                description: name,
                imageSrc: "" + assetUrl + basename(imgsrc),
                star: 7 - a$.find("div.star-inactive").length,
                gearLevel: GearLevel[gl],
                level: +(a$.find("div.char-portrait-full-level").text()),
            };
        })
            .get();
        var hasShip = na$.attr("href").startsWith('/u');
        var imgsrc = img === undefined ? "" + assetUrl + basename(ship$.find(".ship-portrait-frame-img").attr("src")) : img;
        return {
            code: na$.attr("href").match(/(?:\/(?:u\/.*\/|)ships\/)(.*)(?:\/)$/)[1],
            description: na$.text(),
            imageSrc: imgsrc,
            star: hasShip ? 7 - stars : 0,
            level: +ship$.find(".ship-portrait-full-frame-level").text(),
            crew: crewMembers,
            galacticPower: +gp[0],
            maxGalacticPower: +gp[1],
        };
    })
        .get();
}

function parseCollection($) {
    return $("body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.media.list-group-item.p-a.collection-char-list > div > div > div > div.player-char-portrait")
        .map(function (x) {
        var _$ = $(this);
        var p$ = _$.parent("div");
        var n$ = p$.find("div.collection-char-name");
        var na$ = n$.find("a");
        var a$ = _$.find("a");
        var i$ = a$.find("img");
        var gp$ = p$.find("div.collection-char-gp");
        var gp = gp$.attr("title").replace(/,/g, '').match(/\d+/g); // fix points
        var gl = a$.find("div.char-portrait-full-gear-level").text();
        var imgsrc = i$.attr("data-src").slice(2);
        return {
            code: na$.attr("href").match(/(?:\/u\/.*collection\/)(.*)(?:\/)$/)[1],
            description: na$.text(),
            imageSrc: "" + assetUrl + basename(imgsrc),
            star: 7 - a$.find("div.star-inactive").length,
            gearLevel: GearLevel[gl],
            level: +(a$.find("div.char-portrait-full-level").text()),
            galacticPower: +gp[0],
            maxGalacticPower: +gp[1],
        };
    })
        .get();
}
function parseCollectionPages($) {
    var txt = $('body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.media.list-group-item.p-a.collection-char-list > ul > li:nth-child(1) > a').text();
    if (!txt) {
        return 0;
    }
    var m = txt.match(/\d+$/);
    if (!m) {
        return 0;
    }
    debugger;
    return +m[0];
}
function parseProfile($) {
    return __assign({}, parseInfo($), parseStats($), parseUser($));
}
//TODO change to have information about guild
function parseGuild($) {
    return $("body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.media.list-group-item.p-0.b-t-0 > div > table > tbody > tr > td > a")
        .map(function () {
        var _$ = $(this);
        var username = _$.attr("href").slice(3, -1);
        var description = _$.find("strong").text();
        return { username: username, description: description };
    }).get();
}
var parseUser = function ($) {
    var b$ = $("body > div.container.p-t-md > div.content-container > div.content-container-aside > div.panel.panel-default.panel-profile.m-b-sm > div.panel-body");
    var username = b$.find("h5.panel-title").text();
    var panelMenus = b$.find("ul > li > h5").get().map(function (x) { return +(x.lastChild || {}).nodeValue; });
    var p = b$.find("p > strong").slice(1).get().map(function (x) { return x.lastChild.nodeValue; });
    var userInfo = b$.find("p")
        .map(function (i, x) { return ({
        key: x.firstChild.nodeValue || '',
        value: x.children[1] && x.children[1].lastChild.nodeValue || null
    }); })
        .toArray();
    var g = b$.find("p > strong > a");
    var aGuild = g.text(); //get
    var aGuildUrl = g.attr("href");
    var lastUpdatedUTC = $('li > span.header-text > div > span').attr("data-datetime");
    var playername = $('h5.panel-title:nth-child(1) > a:nth-child(1)').text();
    var allyCode = userInfo.find(function (x) { return x.key.startsWith("Ally Code"); });
    var joined = userInfo.find(function (x) { return x.key.startsWith("Joined"); });
    return {
        username: username,
        playername: playername,
        userId: panelMenus[0],
        arenaRank: panelMenus[1] || null,
        level: panelMenus[2],
        allyCode: allyCode && allyCode.value || null,
        joined: joined && joined.value || null,
        guild: aGuild,
        guildUrl: aGuildUrl,
        lastUpdatedUTC: lastUpdatedUTC
    };
};
var parseStats = function ($) {
    var p = $("body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li:nth-child(3) > div > div > ul > li > h5")
        .get().map(function (x) { return +x.lastChild.nodeValue; });
    return {
        collectionScore: p[0],
        characters: p[1],
        characters7: p[2],
        characters6: p[3],
        gearXII: p[4],
        gearXI: p[5],
        gearX: p[6],
        gearIX: p[7],
        gearVIII: p[8],
    };
};
var parseInfo = function ($) {
    var p = $("body > div.container.p-t-md > div.content-container > div.content-container-aside > div:nth-child(4) > div > div > p > strong").get()
        .map(function (x) { return +x.lastChild.nodeValue.replace(/,/g, ""); });
    return {
        galacticPower: p[0],
        charactersGalacticPower: p[1],
        shipsGalacticPower: p[2],
        pVEBattlesWon: p[3],
        pVEHardBattlesWon: p[4],
        galacticWarBattlesWon: p[5],
        arenaBattlesWon: p[6],
        guildCurrencyEarned: p[7],
        raidsWon: p[8],
        shipBattlesWon: p[9],
    };
};

var requestretry = require("requestretry");
var Queue = require("promise-queue");
var config = {
    simultaneousRequests: 10,
    safeQueueSize: 5,
    maxQueueSize: 50,
    tick: 33
};
var ConcurrentQueue = /** @class */ (function () {
    function ConcurrentQueue(_config) {
        if (_config === void 0) { _config = config; }
        this._config = _config;
        this._queue = new Queue(30);
    }
    ConcurrentQueue.prototype.queue = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                /*if (this._queue.getQueueLength() > this._config.maxQueueSize) {
                  while (this._queue.getQueueLength() < this._config.safeQueueSize) {
                    await promiseSetTimeout(TICK);
                  }
                }*/
                return [2 /*return*/, this._queue.add(function () { return requestretry(uri); })];
            });
        });
    };
    return ConcurrentQueue;
}());
/*
export function promiseSetTimeout(ms: number): Promise<any> {
  return new Promise((resolve => setTimeout(resolve, ms)));
}
*/

var swgohgg = "https://swgoh.gg";

var swgohJar = jar();
defaults({
    jar: swgohJar
});
var Swgoh = /** @class */ (function () {
    function Swgoh(_queue) {
        if (_queue === void 0) { _queue = new ConcurrentQueue(); }
        this._queue = _queue;
    }
    Swgoh.prototype.getCheerio = function (uri) {
        return this._queue.queue(uri)
            .then(this.validateRequest)
            .then(function (x) { return load(x.body); });
    };
    Swgoh.prototype.validateRequest = function (request) {
        if (request.body.indexOf("<title>Login &middot; SWGOH.GG</title>") >= 0) {
            throw new Error('Login is required');
        }
        return request;
    };
    //based on https://github.com/bahmutov/csrf-login/blob/master/src/csrf-login.js
    Swgoh.prototype.login = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, jar$$1, host, $login, csrfmiddlewaretoken, csrf, form, r, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = resolve(swgohgg, "/accounts/login/");
                        jar$$1 = jar();
                        host = "swgoh.gg";
                        return [4 /*yield*/, this._queue.queue({ uri: uri, jar: jar$$1 }).then(function (x) { return load(x.body); })];
                    case 1:
                        $login = _a.sent();
                        csrfmiddlewaretoken = $login("input[name=csrfmiddlewaretoken]").attr("value");
                        csrf = csrfmiddlewaretoken;
                        form = {
                            username: username,
                            password: password,
                            csrfmiddlewaretoken: csrfmiddlewaretoken,
                        };
                        r = {
                            uri: uri,
                            form: form,
                            method: "POST",
                            jar: jar$$1,
                            followAllRedirects: true,
                            headers: {
                                referer: host
                            }
                        };
                        jar$$1.setCookie(cookie('csrftoken=' + csrf), uri);
                        return [4 /*yield*/, this._queue.queue(r).then(function (x) { return x.body; })];
                    case 2:
                        html = _a.sent();
                        // console.log('html:' + html)
                        //todo change to regex expression with word probably
                        return [2 /*return*/, html.indexOf(username) >= 0];
                }
            });
        });
    };
    Swgoh.prototype.profile = function (username) {
        var uri = resolve(swgohgg, "/u/" + username + "/");
        return this.getCheerio(uri).then(parseProfile);
    };
    Swgoh.prototype.collection = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, $, pages, promises, i, collections;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = resolve(swgohgg, "/u/" + username + "/collection/");
                        return [4 /*yield*/, this.getCheerio(uri)];
                    case 1:
                        $ = _a.sent();
                        pages = parseCollectionPages($);
                        promises = [Promise.resolve(parseCollection($))];
                        for (i = 2; i <= pages; i++) {
                            promises.push(this.getCheerio(resolve(uri, "?page=" + i)).then(parseCollection));
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 2:
                        collections = _a.sent();
                        return [2 /*return*/, collections.reduce(function (v, c) {
                                c.push.apply(c, v);
                                return c;
                            }, [])];
                }
            });
        });
    };
    Swgoh.prototype.mods = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var modsUri, uri, $, modsPage, promises, pMods;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modsUri = "/u/" + username + "/mods/";
                        uri = resolve(swgohgg, modsUri);
                        return [4 /*yield*/, this.getCheerio(uri)];
                    case 1:
                        $ = _a.sent();
                        modsPage = getModPages($) - 1;
                        promises = Array.from({ length: modsPage }, function (k, i) { return i + 2; })
                            .map(function (x) { return _this.getCheerio(uri + ("?page=" + x))
                            .then(function (x) { return parseModCollection(x); }); });
                        return [4 /*yield*/, Promise.all(promises.slice())];
                    case 2:
                        pMods = _a.sent();
                        pMods.unshift(parseModCollection($)); //insert at the beginning
                        return [2 /*return*/, [].concat.apply([], pMods)]; //flat
                }
            });
        });
    };
    Swgoh.prototype.ship = function (username) {
        var uri = resolve(swgohgg, "/u/" + username + "/ships/");
        return this.getCheerio(uri).then(parseShips);
    };
    Swgoh.prototype.guild = function (opts) {
        var uri;
        if (typeof opts === "string") {
            var m = opts.match(/\d+/);
            if (!m) {
                throw new Error("Error: \"" + opts + "\" is not a valid guild url");
            }
            uri = resolve(swgohgg, opts);
        }
        else {
            var id = opts.id;
            if (isNaN(id) || !isNumber(id)) {
                throw new Error("Error: Unable to parse guild id from \"" + opts + "\"");
            }
            var name = opts.name;
            if (!name || name === '') {
                throw new Error("Error: Unable to parse guild name from \"" + opts + "\"");
            }
            uri = resolve(swgohgg, "/g/" + id + "/" + name + "/");
        }
        return this.getCheerio(uri).then(parseGuild);
    };
    Swgoh.prototype.units = function (opts) {
        var id;
        if (typeof opts === "string") {
            var m = opts.match(/\d+/);
            if (!m) {
                throw new Error("Error: \"" + opts + "\" is not a valid guild url");
            }
            id = +m[0];
        }
        else {
            id = opts.id;
        }
        if (isNaN(id) || !isNumber(id)) {
            throw new Error("Error: Unable to parse guild id from url \"" + opts + "\"");
        }
        var uri = resolve(swgohgg, "/api/guilds/" + id + "/units/");
        return this._queue.queue(uri).then(function (x) { return x.body; });
    };
    return Swgoh;
}());
var swgoh = new Swgoh();

var requestretry$1 = require("requestretry");
var baseurl = "https://raw.githubusercontent.com/pikax/swgoh/master/static/";
function getCharacters(cached) {
    if (cached === void 0) { cached = true; }
    if (cached) {
        return require("../static/characters.json");
    }
    return requestretry$1(resolve(baseurl, "characters.json"))
        .then(function (x) { return x.body; });
}
function getShips(cached) {
    if (cached === void 0) { cached = true; }
    if (cached) {
        return require("../static/ships.json");
    }
    return requestretry$1(resolve(baseurl, "ships.json"))
        .then(function (x) { return x.body; });
}

export { swgoh, Swgoh, getCharacters, getShips };
//# sourceMappingURL=index.es.js.map
