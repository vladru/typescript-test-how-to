import sinon from 'ts-sinon';
import {assert, expect} from "chai";

import { A } from '../src/class A';
import { B } from '../src/class B';
import * as BClass from '../src/class B';

describe('A Test', () => {

    let locateStub: sinon.SinonStub<[],string>;
    let classBStub: sinon.SinonStub;

    before(() => {

        // https://stackoverflow.com/questions/22714085/calling-original-function-from-sinon-js-stub
        const originalB = BClass.B;

        // https://medium.com/@kirien.eyma/mocking-importd-class-dependencies-in-sinon-js-with-typescript-8854f9c00ee
        classBStub = sinon.stub(BClass, 'B').callsFake((args) => {
            console.log("constructor 'B' have been called with args: '%s'", JSON.stringify(args));
            const instanceB: B = new originalB(args);
            locateStub = sinon.stub(instanceB, 'locate');
            if (args['location'] === 'Russia') {
                locateStub.callThrough();
            } else {
                locateStub.returns(instanceB['location'] + " (not from Russia)");
            }
            return instanceB;
        })
    });

    beforeEach( () => {
       classBStub.resetHistory();
    });

    it('should assert personhood for Ivan from Russia', () => {

        const a = new A({name: "Ivan", location: "Russia"});
        expect(a.assertPersonhood()).to.equal("Ivan from Russia");
        assert(classBStub.calledOnce);
        assert(locateStub.calledOnce)
    });

    it('should assert personhood for Ivan from USA', () => {
        const a = new A({name: "Ivan", location: "USA"});
        expect(a.assertPersonhood()).to.equal("Ivan from USA (not from Russia)");
        assert(classBStub.calledOnce);
        assert(locateStub.calledOnce)
    })

});
