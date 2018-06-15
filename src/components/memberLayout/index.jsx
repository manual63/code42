import React from 'react';

import Members from '../members';
import MemberDetails from '../memberDetails';

import styles from './styles.less';

class MemberLayout extends React.Component {
    constructor() {
        super();

        // Having states all over the place is why I would ideally use Redux and have the state store all in one place
        // But for a sinple app like this, local state works
        this.state = {
            members: [],
            memberDetails: {}
        };

        this.getMembers()
            .then((data) => {
                this.setState({'members': data});
            })
            .catch((error) => {
                console.log('error', error);
            })

        this.showMemberDetails = this.showMemberDetails.bind(this);
    }

    componentDidMount() {

    }

    getMembers() {
        return fetch('https://api.github.com/orgs/code42/members')
        .then((response) => {
            return response.json();
        });
    }

    showMemberDetails(memberId) {
        const selectedMember = this.state.members.find(member => {
            return member.id === memberId;
        })
        this.setState({'memberDetails': selectedMember});
    }

    render() {
        return (
            <div className={`${styles.wrapper} row`}>
                <div className="col-md-3">
                    <Members members={this.state.members} showMemberDetails={this.showMemberDetails} selectedMember={this.state.memberDetails.id} />
                </div>
                <div className="col-md-9">
                    <MemberDetails memberDetails={this.state.memberDetails}/>
                </div>
            </div>
        );
    }
}

export default MemberLayout;