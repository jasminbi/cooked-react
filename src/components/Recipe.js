import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Recipe extends Component {
    
}


Recipe.PropTypes = {
    ingredients: PropTypes.array.isRequired,
    steps: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default Recipe;