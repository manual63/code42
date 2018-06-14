import React from 'react';
import PropTypes from 'prop-types';

class RepoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            repoList: []
        }
    }

    setRepos() {
        fetch(this.props.reposUrl)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({'repoList': data});
            });
    }

    componentDidMount() {
        this.setRepos();
    }

    componentDidUpdate() {
        this.setRepos();
    }

    render() {
        const repoList = this.state.repoList;

        return (
            <div>
                <div>Repos</div>
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