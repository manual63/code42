import React from 'react';

class Members extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.members);
    }

    showHello() {
        alert('Hello!');
    }

    render() {
        const members = this.props.members;

        return (
            <div>
                <h1>Member List</h1>
                <ul>
                    {
                        members.map(member => {
                            return <li onClick={() => this.props.showMemberDetails(member.id)}>{member.login}</li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Members;