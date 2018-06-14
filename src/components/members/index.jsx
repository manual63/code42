import React from 'react';
import PropTypes from 'prop-types';

class Members extends React.Component {
    constructor(props) {
        super(props);
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

Members.propTypes = {
    members: PropTypes.array
}

export default Members;