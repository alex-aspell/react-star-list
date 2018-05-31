import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import CurrentNewStar from './CurrentNewStar.js';
import StarList from '../StarList/StarList.js';
import NewStarForm from '../NewStarForm/NewStarForm.js'
import PlanetList from '../PlanetList/PlanetList.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newStar: {
        name:'',
        diameter: '',
      },
      starList: [
        {name: 'Gacrux', diameter: '117 million km'}, 
        {name: 'Hadar', diameter: '13 million km'}, 
        {name:'Fomalhaut', diameter: '1.3 million km'}
      ],
      planetList: [],
    }
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  getPlanets(){
    axios.get('https://swapi.co/api/planets/?format=json')
    .then(response => {
      const planets = response.data;
      console.log(planets);
      this.setState({
        planetList: response.data.results,
      })
      axios.get(response.data.next)
      .then(response => {
        console.log(response.data);
        this.setState({
        planetList: [...this.state.planetList, ...response.data.results]
      })
      })
    })
    .catch(error => {
      console.log('That error', error);
    })
  }

  componentDidMount(){
    this.getPlanets();
  }

  

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newStar: {
        ...this.state.newStar,
        [propertyName]: event.target.value
      }
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      newStar: {
        name: '',
        diameter: '',
      },
      starList: [
        ...this.state.starList,
        this.state.newStar]
    })
  }

  render() {
      // let starArray = [];
    // for(let i=0; i < this.state.starList.length; i++){
    // for (let star of this.state.starList){
    // this.state.starList.forEach(star => {
    //  const starArray = this.state.starList.map( (star,i) => <li key={i}>{star}</li>)
      // starArray.push(<li>{star}</li>);
    // })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CurrentNewStar newStar={this.state.newStar}/>
        <NewStarForm handleSubmit={this.handleSubmit} newStar={this.state.newStar} handleChangeFor={this.handleChangeFor}/>
        <StarList starList={this.state.starList} />
        <PlanetList planetList={this.state.planetList}/>
      </div>
    );
  }
}

export default App;
