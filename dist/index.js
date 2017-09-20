'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cheerio = require('cheerio');
var url = require('url');

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
/* global Reflect, Promise */



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
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
        return {
            code: na$.attr("href").match(/(?:\/u\/.*collection\/)(.*)(?:\/)$/)[1],
            description: na$.text(),
            imageSrc: i$.attr("src").slice(2),
            star: 7 - a$.find("div.star-inactive").length,
            gearLevel: GearLevel[gl],
            level: +(a$.find("div.char-portrait-full-level").text()),
            galacticPower: +gp[0],
            maxGalacticPower: +gp[1],
        };
    })
        .get();
}
function parseProfile($) {
    return __assign({}, parseInfo($), parseStats($), parseUser($));
}
function parseGuild($) {
    return $("body > div.container.p-t-md > div.content-container > div.content-container-primary.character-list > ul > li.media.list-group-item.p-0.b-t-0 > div > table > tbody > tr > td > a")
        .map(function () {
        var _$ = $(this);
        var username = _$.attr("href").slice(3, -1);
        var description = _$.find("strong").text();
        return { username: username, description: description };
    }).get();
}
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
            if (!na$.attr("href"))
                return; //TODO fix me
            return {
                code: na$.attr("href").match(/(?:\/(?:u\/.*\/|)collection\/)(.*)(?:\/)$/)[1],
                description: name,
                imageSrc: i$.attr("src").slice(2),
                star: 7 - a$.find("div.star-inactive").length,
                gearLevel: GearLevel[gl],
                level: +(a$.find("div.char-portrait-full-level").text()),
            };
        })
            .get();
        return {
            code: na$.attr("href").match(/(?:\/(?:u\/.*\/|)ships\/)(.*)(?:\/)$/)[1],
            description: na$.text(),
            imageSrc: img === undefined ? ship$.find(".ship-portrait-frame-img").attr("src") : img,
            star: stars ? 7 - stars : 0,
            level: +ship$.find(".ship-portrait-full-frame-level").text(),
            crew: crewMembers,
            galacticPower: +gp[0],
            maxGalacticPower: +gp[1],
        };
    })
        .get();
}
var parseUser = function ($) {
    var b$ = $("body > div.container.p-t-md > div.content-container > div.content-container-aside > div.panel.panel-default.panel-profile.m-b-sm > div.panel-body");
    var name = b$.find("h5.panel-title").text();
    var panelMenus = b$.find("ul > li > h5").get().map(function (x) { return +x.lastChild.nodeValue; });
    var p = b$.find("p > strong").slice(1).get().map(function (x) { return x.lastChild.nodeValue; });
    var g = b$.find("p > strong > a");
    var aGuild = g.text(); //get
    var aGuildUrl = g.attr("href");
    return {
        username: name,
        userId: panelMenus[0],
        arenaRank: panelMenus[1],
        level: panelMenus[2],
        allyCode: p[1] && p[0],
        joined: p[1] || p[0],
        guild: aGuild,
        guildUrl: aGuildUrl
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
var TICK = 33;
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
                switch (_a.label) {
                    case 0:
                        if (!(this._queue.getQueueLength() > this._config.maxQueueSize)) return [3 /*break*/, 3];
                        _a.label = 1;
                    case 1:
                        if (!(this._queue.getQueueLength() < this._config.safeQueueSize)) return [3 /*break*/, 3];
                        return [4 /*yield*/, promiseSetTimeout(TICK)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, this._queue.add(function () { return requestretry(uri); })];
                }
            });
        });
    };
    return ConcurrentQueue;
}());
function promiseSetTimeout(ms) {
    return new Promise((function (resolve$$1) { return setTimeout(resolve$$1, ms); }));
}

var swgohgg = "https://swgoh.gg";
var Swgoh = /** @class */ (function () {
    function Swgoh(_queue) {
        if (_queue === void 0) { _queue = new ConcurrentQueue(); }
        this._queue = _queue;
    }
    Swgoh.prototype.getCheerio = function (uri) {
        return this._queue.queue(uri).then(function (x) { return cheerio.load(x.body); });
    };
    Swgoh.prototype.profile = function (username) {
        var uri = url.resolve(swgohgg, "/u/" + username + "/");
        return this.getCheerio(uri).then(parseProfile);
    };
    Swgoh.prototype.collection = function (username) {
        var uri = url.resolve(swgohgg, "/u/" + username + "/collection");
        return this.getCheerio(uri).then(parseCollection);
    };
    Swgoh.prototype.ship = function (username) {
        var uri = url.resolve(swgohgg, "/u/" + username + "/ships");
        return this.getCheerio(uri).then(parseShips);
    };
    Swgoh.prototype.guild = function (opts) {
        var uri;
        if (typeof opts === "string") {
            uri = url.resolve(swgohgg, opts);
        }
        else {
            uri = url.resolve(swgohgg, "/g/" + opts.id + "/" + opts.name);
        }
        return this.getCheerio(uri).then(parseGuild);
    };
    return Swgoh;
}());
var swgoh = new Swgoh();

exports.swgoh = swgoh;
exports.Swgoh = Swgoh;
