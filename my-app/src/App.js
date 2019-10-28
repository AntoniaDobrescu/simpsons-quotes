import React, {Component} from 'react';
import './App.css';
import Quote from './components/Quote';
import classNames from 'classnames';
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHomerWorking: false
    }
  }

  toggleHomerWorking = () => {
    this.setState ({
      isHomerWorking: !this.state.isHomerWorking
    })
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <div className="standard "></div>
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <button onClick={this.toggleHomerWorking}>Button</button>
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
        <img src = {logo} className={classNames(
          ['reactLogo',
          {'reactLogo-active': this.state.isHomerWorking}
        ])} />
        <button onClick={this.toggleHomerWorking} className='styleButton'>Button</button>
      </div>
    );
  }
}

export default App;
