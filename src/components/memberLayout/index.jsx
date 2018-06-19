import React from 'react';

import Members from '../members';
import MemberDetails from '../memberDetails';

import styles from './styles.less';

class MemberLayout extends React.Component {
    constructor() {
        super();

        this.state = {
            members: [],
            memberDetails: {
                id: '',
                name: '',
                location: '',
                imageUrl: ''
            },
            memberRepoList: []
        };

        this.getMembers('https://api.github.com/orgs/code42/members');

        this.getMemberDetails = this.getMemberDetails.bind(this);
    }

    getData(url) {
        return fetch(url)
        .then((response) => {
            return response.json();
        });
    }

    getMembers(url) {
        this.getData(url)
        .then((data) => {
            this.setState({'members': data});
        });
    }

    getMemberRepos(reposUrl) {
        this.getData(reposUrl)
        .then((data) => {
            this.setState({'memberRepoList': data});
        });
    }

    getMemberDetails(memberId) {
        const selectedMember = this.state.members.find(member => {
            return member.id === memberId;
        });

        this.getData(selectedMember.url)
        .then((data) => {
            this.setState({
                memberDetails: {
                    id: data.id,
                    name: data.name,
                    imageUrl: data.avatar_url,
                    location: data.location
                }
            })
            this.getMemberRepos(data.repos_url);
        });
    }

    render() {
        return (
            <div>
                <div class="row">
                    <header className="col-md-12">
                        <h1>Code42 GitHub Members</h1>
                    </header>
                </div>
                <div class="row">
                    <div className="col-md-3">
                        <Members members={this.state.members} getMemberDetails={this.getMemberDetails} selectedMember={this.state.memberDetails.id} />
                    </div>
                    <div className="col-md-9">
                        <MemberDetails memberDetails={this.state.memberDetails} memberRepoList={this.state.memberRepoList} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MemberLayout;