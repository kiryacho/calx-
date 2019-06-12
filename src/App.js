import React, { Component } from 'react';
import './App.css';
import './bg-animation.css';



const pricePerRow = 0.11
const pricePerTon = 4;



class App extends Component {

stylesFor = {
  fontSize: 40,
  fontWeight: 'bold',
  color: '#F2F2F7',
};

  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }


  render() {

    return (
      <div className="App">
        
        <header className="App-header">
          <h1 style={{color: '#F2F2F7'}}> Coop CalX </h1>
        </header>
        
        <div className="container">
          <select style={{color: '#F2F2F7'}}> 
            <option value="PIIM">PIIM</option>
            <option value="KYLM">KYLM</option>
            <option selected value="PUJU">PUJU</option>
            <option value="SYGAVKYLM">SYGAVKYLM</option>
          </select>
          
          <form style={this.stylesFor}>
            <label>
              Rows:
                <input type="number"  onChange={this.myChangeHandler} style={this.stylesFor} />
              Weight:
                <input type="number" onChange={this.myChangeHandler} style={this.stylesFor}/>
            </label> 
         <div class="outputBox"><h1>{this.state.username} €</h1></div>
          </form>

        </div>

      </div>
    );
  }
}

export default App;
