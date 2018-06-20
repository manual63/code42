import React from 'react';
import MemberLayout from './index';

beforeEach(() => {
    const mockResponse = {
        json: jest.fn(() => ['something', 'something else'])
    };
    global.fetch = jest.fn(() => new Promise(resolve => resolve(mockResponse)));
});

afterEach(() => {
    global.fetch = null;
});

describe('MemberLayout', () => {
    it('should match snapshot', () => {
        const memberLayout = shallow(
            <MemberLayout />
        );

        expect(memberLayout).toMatchSnapshot();
    });
});

describe('getData()', () => {
    it('should return valid array', async () => {
        const mockData = ['something', 'something else'];

        const memberLayout = shallow(
            <MemberLayout />
        );

        const data = await memberLayout.instance().getData();

        expect(data).toEqual(mockData);
    });
});

describe('getMembers()', () => {
    it('should set member list state', async () => {
        const mockData = [
            'member1',
            'member2'
        ];

        const memberLayout = shallow(
            <MemberLayout />
        );
        memberLayout.instance().getData = jest.fn(() => new Promise(resolve => resolve(['member1', 'member2'])));
        memberLayout.update();

        await memberLayout.instance().getMembers('http://www.someurl.com');

        expect(memberLayout.instance().getData).toBeCalledWith('http://www.someurl.com');
        expect(memberLayout.instance().state.members).toEqual(mockData);
    });
});

describe('getMemberRepos()', () => {
    it('should set repo list state', async () => {
        const mockData = [
            'repo1',
            'repo2'
        ];

        const memberLayout = shallow(
            <MemberLayout />
        );
        memberLayout.instance().getData = jest.fn(() => new Promise(resolve => resolve(['repo1', 'repo2'])));
        memberLayout.update();

        await memberLayout.instance().getMemberRepos('http://www.someurl.com');

        expect(memberLayout.instance().getData).toBeCalledWith('http://www.someurl.com');
        expect(memberLayout.instance().state.memberRepoList).toEqual(mockData);
    });
});

describe('getMemberDetails()', () => {
    it('should set member details state', async () => {
        const mockData = [
            'repo1',
            'repo2'
        ];

        const memberLayout = shallow(
            <MemberLayout />
        );
        memberLayout.instance().getData = jest.fn(() => new Promise(resolve => resolve(['repo1', 'repo2'])));
        memberLayout.update();

        await memberLayout.instance().getMemberRepos('http://www.someurl.com');

        expect(memberLayout.instance().getData).toBeCalledWith('http://www.someurl.com');
        expect(memberLayout.instance().state.memberRepoList).toEqual(mockData);
    });
});
