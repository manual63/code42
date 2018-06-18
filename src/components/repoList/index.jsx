import React from 'react';
import PropTypes from 'prop-types';

class RepoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const repoList = this.props.repoList;

        return (
            <div>
                <h2>Repos</h2>
                <ul>
                {
                    repoList.map(repo => {
                        return <li>{repo.name}</li>;
                    })
                }
                </ul>
            </div>
        );
    }
}

RepoList.propTypes = {
    repoList: PropTypes.array
}

export default RepoList;