import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navigation extends Component {
    constructor(props) {
        super(props);
        
    }

    

    render() {
        return (
            <div className="Navigation">
                <nav className="Navigation__nav">
                    <ul className="Navigation__list">
                    {
                        this.props.recipes.map((recipe) =>
                            <li>{recipe.title}</li>)
                    }
                    </ul></nav>
            </div>
        )
    }
}

export default Navigation;