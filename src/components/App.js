import React, { Component } from 'react';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            recipes: [
                {
                    title: 'Bagel',
                    ingredients: [
                        '1 Bagel',
                        'Cream cheese'
                    ],
                    steps: [
                        'Slice bagel in half',
                        'Spread on cream cheese',
                        'Enjoy!'
                    ],
                    //Ideally: each recipe ID should go through a function for uniqueness. 
                    id: 'bagel'
                },
                {
                    title: 'Pizza',
                    ingredients: [
                        '1 Pizza Crust',
                        '1 Jar of Pizza Sauce',
                        '3 oz Part-Skim Mozerella Cheese'
                    ],
                    steps: [
                        'Put sauce on crust',
                        'Sprinkle mozarella cheese over sauce',
                        'Bake at 350 degrees for 20 minutes'
                    ],
                    id: 'pizza'
                },
            ],
        }

    }

    render() {
        return (
            <div className="App"></div>
        );
    }
}

export default App;