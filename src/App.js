import React from 'react';
import axios from 'axios';  // Used to make GET requests from APIs, install it: npm install --save axios

import './App.css';

// class Component
class App extends React.Component {
    // State is like a global object containing all most important things in that component
    state = { advice: '' };

    // Part of Component lifecycle. Executes exactly at the render of our component
    componentDidMount() {
        // console.log("Component Did MOUNT");
        this.fetchAdvice();
        
    }

    // method to fetch 
    fetchAdvice = () =>   {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice } = response.data.slip;
            // console.log(advice);
            
            this.setState({advice});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        const {advice} = this.state;

        return (
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE!</span>
                    </button>
                </div>
            </div>
        );
    }
}

// responsible for imorting class App to other files
export default App;