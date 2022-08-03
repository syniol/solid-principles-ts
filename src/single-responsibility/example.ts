import { Satellite } from './after';
import { SatelliteTracker } from './before/satellite-tracker'

describe('Single Responsibility Example', () => {
    describe('Before Refactoring Demonstration', () => {
        let sut: SatelliteTracker = new SatelliteTracker();

        describe('Satellite Controller Test', () => {
            it('should not throw', () => {
                expect(sut.moveDown()).not.toThrowError();
            })
        })

        describe('Satellite Fuel Test', () => {
            it('should equal hardcoded zero', () => {
                expect(sut.fuelLevel).toEqual(0);
            })
        })

        describe('Satellite Location Test', () => {
            it('should equal hardcoded value latitude', () => {
                expect(sut.latitude).toEqual('51.507351');
            })
        })
    })

    describe('After Refactoring Demonstration', () => {
        const mockSatellite = jest.mock('SatelliteUnit');

        describe('Satellite Controller Test', () => {
            let sut: Satellite.SatelliteController;

            beforeAll(() => {
                sut = new Satellite.SatelliteController(mockSatellite);
            })

            it('should not throw', () => {
                expect(sut.moveDown()).not.toThrowError();
            })
        })

        describe('Satellite Fuel Test', () => {
            let sut: Satellite.SatelliteFuel;

            beforeAll(() => {
                sut = new Satellite.SatelliteFuel(mockSatellite);
            })

            it('should equal hardcoded zero', () => {
                expect(sut.level).toEqual(0);
            })
        })

        describe('Satellite Location Test', () => {
            let sut: Satellite.SatelliteLocation;

            beforeAll(() => {
                sut = new Satellite.SatelliteLocation(mockSatellite);
            })

            it('should equal hardcoded value latitude', () => {
                expect(sut.latitude).toEqual('51.507351');
            })
        })
    })
})
