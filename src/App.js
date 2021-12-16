import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }

    render(){
        const filteredRobot = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return (
        <div className='text-center'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearchChange}  />
            <div style={{overflow: 'scroll', border:'1px solid black', height:'500px'}}>
            <CardList robots={filteredRobot} />
            </div>
        </div>
    );
    }
}

export default App;