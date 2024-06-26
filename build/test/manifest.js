import { expect } from 'chai';
import { after, before, describe, it } from 'mocha';
import { getManifest, isValidManifest, isValidRunManifest } from '../src/manifest.js';
import { cleanup, setup, setupWithRunManifest } from './functions.js';
describe('Test getManifest function', () => {
    before(setup);
    it('should get a valid manifest file correctly', async () => {
        const manifest = await getManifest();
        expect(manifest.timeZone).to.equal('America/Los_Angeles');
    });
    after(cleanup);
});
describe('Test isValidRunManifest function', () => {
    it('should validate a manifest with run permissions', async () => {
        setupWithRunManifest();
        expect(await isValidRunManifest()).to.equal(true);
        cleanup();
    });
    it('should not validate a manifest with run permissions', async () => {
        setup();
        expect(await isValidRunManifest()).to.equal(false);
        cleanup();
    });
    after(cleanup);
});
describe('Test isValidManifest function', () => {
    before(setup);
    it('should validate a manifest', async () => {
        expect(await isValidManifest()).to.equal(true);
    });
    after(cleanup);
});
//# sourceMappingURL=manifest.js.map