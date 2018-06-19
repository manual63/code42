import React from 'react';
import MemberLayout from './index';

describe('MemberLayout', () => {
    beforeEach(() => {
        const mockResponse = {
            json: jest.fn()
        }
        global.fetch = jest.fn(() => new Promise(resolve => resolve(mockResponse)));
    });

    afterEach(() => {
        global.fetch = null;
    });

    it('should match snapshot', () => {
        const memberLayout = shallow(
            <MemberLayout />
        );

        expect(memberLayout).toMatchSnapshot();
    });
});

describe('getData()', () => {
    beforeEach(() => {
        const mockData = []
        const response = {
            json: jest.fn(() => mockData)
        }
        global.fetch = jest.fn(() => new Promise(resolve => resolve(response)));
    });

    afterEach(() => {
        global.fetch = null;
    });

    it('should return empty data obj', async () => {
        const mockData = []

        const memberLayout = shallow(
            <MemberLayout />
        );

        const data = await memberLayout.instance().getData();

        expect(data).toEqual(mockData)
    });
});
