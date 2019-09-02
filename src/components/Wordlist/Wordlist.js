import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWordlist } from '../../store/actions/wordlistActions';
import axios from 'axios';

import Word from './Word';

class Wordlist extends Component {
    componentDidMount() {
        this.props.getWordlist();
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.wordlist.loaded === this.props.wordlist.loaded) {
            return false;
        }
        return true;
    }

    deleteWordHandler = word_id => {
        console.log(`fired with ${word_id}`);
        axios
            .post('/words/delete_word/' + word_id)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    render() {
        const { words } = this.props.wordlist;
        let rowNumber = 0;

        return (
            <div className="mt-5">
                <h1>Word List</h1>
                <div className="container mt-5">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">
                                    <i className="fa fa-language"></i>
                                </th>
                                <th scope="col">Word</th>
                                <th scope="col">Translastion</th>
                                <th scope="col">
                                    <i className="fa fa-i-cursor"></i>
                                </th>
                                <th scope="col">
                                    <i className="fa fa-check"></i>
                                </th>
                                <th scope="col">
                                    <i className="fa fa-times"></i>
                                </th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {words.map(word => {
                                rowNumber++;
                                return (
                                    <Word
                                        key={word.word_id}
                                        word_id={word.word_id}
                                        rowNumber={rowNumber}
                                        word={word.word}
                                        word_meaning={word.word_meaning}
                                        times_reviewed={word.times_reviewed}
                                        times_correct={word.times_correct}
                                        times_incorrect={word.times_incorrect}
                                        language={word.language_id}
                                        delete={this.deleteWordHandler}
                                    />
                                );
                            })}
                        </tbody>
                    </table>{' '}
                </div>
            </div>
        );
    }
}

Wordlist.propTypes = {
    auth: PropTypes.object.isRequired,
    wordlist: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    wordlist: state.wordlist,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { getWordlist }
)(Wordlist);
