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

describe('GetMembers()', () => {
    beforeEach(() => {
        const memberList = [
            'member1',
            'member2',
            'member3'
        ];
        const response = {
            json: jest.fn(() => memberList)
        }
        global.fetch = jest.fn(() => new Promise(resolve => resolve(response)));
    });

    afterEach(() => {
        global.fetch = null;
    });

    it('should return list of members', async () => {
        const memberList = [
            'member1',
            'member2',
            'member3'
        ];

        const memberLayout = shallow(
            <MemberLayout />
        );

        const members = await memberLayout.instance().getMembers();

        expect(members).toEqual(memberList)
    });
});
