import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AsyncSelect from 'react-select/async';
import {
    searchCategory,
    emptyCategories
} from '../../store/actions/categoryActions';
import isEmpty from '../../utils/isEmpty';

class CategoryInput extends Component {
    state = {
        category: []
    };

    async loadOptions(input) {
        console.log(input);
        if (!isEmpty(input)) {
            await this.props.searchCategory(input);
            return this.props.category.categories;
        } else {
            await this.props.emptyCategories(input);
            return this.props.category.categories;
        }
    }

    inputChangeHandler = input => {
        const category = input.toLowerCase();
        this.setState({ category });
        return category;
    };

    render() {
        return (
            <AsyncSelect
                cacheOptions
                isMulti
                loadOptions={e => this.loadOptions(e)}
                onInputChange={this.inputChangeHandler}
            />
        );
    }
}

const mapStateToProps = state => ({
    category: state.category,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { searchCategory, emptyCategories }
)(CategoryInput);
