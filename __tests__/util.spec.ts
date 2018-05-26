import {fixNumber, parsePercent100} from '../src/util';


function requireUncached(module) {
    delete require.cache[require.resolve(module)]
    return import(module)
}

describe("Test utils functions", () => {

    it('should fix swgoh.gg number', () => {
        expect(fixNumber('100,000.5')).toBe(100000.5);
        expect(fixNumber('1,000,000.5')).toBe(1000000.5);
    });

    it("should parse percent number", () => {
        for (let i = 1; i <= 100; ++i) {
            expect(parsePercent100(`${i}%`)).toBe(i / 100);
            expect(parsePercent100(i.toString())).toBe(i / 100);
        }
    });


    describe("asset url", () => {

        beforeEach(() => {
            // reset modules
            jest.resetModules()
        });

        afterEach(() => {
            delete process.env.USE_SWGOH_ASSET;
            delete process.env.SWGOH_ASSET_LOCATION;
        });


        function resolveAssetUrl() {
            return require('../src/util').assetUrl;
        }


        it('should default to github location', () => {
            expect(resolveAssetUrl()).toContain("raw.githubusercontent.com/pikax/swgoh/");
        });


        it('should default to swgoh.gg location if USE_SWGOH_ASSET=1', async () => {
            process.env.USE_SWGOH_ASSET = '1';

            expect(resolveAssetUrl()).toContain("swgoh.gg/");
        });

        it("should use custom asset location", () => {
            const myCustomSite = 'https://mycustomawesomewebsite.supa.supa/assets';

            process.env.SWGOH_ASSET_LOCATION = myCustomSite;

            expect(resolveAssetUrl()).toBe(myCustomSite);
        });

    });
});