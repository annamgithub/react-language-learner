import React, { Component } from 'react';
import '../App/App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Card from '../Card/Card.js'
import Navbar from '../Navbar/Navbar'

class App extends Component {
  constructor() {
    super()
    this.state = ({
      photos: []
    })
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  async componentDidMount() {
    const apiKey = '17756650-73c04ca2ae6634ec96a4f90c2';
    const spainPhotos = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=spain&image_type=photo`)
    const photos = spainPhotos.data.hits

    const photoKeys = Object.keys(photos);
    console.log("Keys:", photoKeys)
    const randomize = photoKeys[Math.floor(Math.random() * photoKeys.length)];

    this.setState({
      espana: photos[randomize].largeImageURL
    })
  }

  render() {

    return (
      <div className="App" >
        <div className="background-image" style={{ backgroundImage: `url(${this.state.espana} )` }}>
          <Navbar />
          <Card />
        </div>
      </div>
    );
  }
}

export default () => (
  <Router>
    <App />
  </Router>
)