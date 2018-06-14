import React from 'react';
import PropTypes from 'prop-types';

class RepoList extends React.Component {
    constructor(props) {
        super(props);

        // Having states all over the place is why I would ideally use Redux and have the state store all in one place
        // But for a sinple app like this local state works
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