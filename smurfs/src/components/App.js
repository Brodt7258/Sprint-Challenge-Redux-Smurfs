import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';

class App extends Component {

  state = {
    name: '',
    age: '',
    height: ''
  };

  componentDidMount = () => {
    this.props.getSmurfs();
  };

  submit = (e) => {
    e.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleChange = (key) => (e) => {
    this.setState({
      [key]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <form action="">
          <input type="text" value={this.state.name} onChange={this.handleChange('name')}/>
          <input type="text" value={this.state.age} onChange={this.handleChange('age')}/>
          <input type="text" value={this.state.height} onChange={this.handleChange('height')}/>
          <button onClick={this.submit}>submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs, fetching }) => {
  return {
    smurfs
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
