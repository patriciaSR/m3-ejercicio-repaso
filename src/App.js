import React from 'react';
import './App.scss';
import { clubs } from './clubs';
import ClubList from './components/ClubList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: this.setId(clubs)
    }
    this.setId = this.setId.bind(this);
  }

  setId(arr){
    const newArr = arr.map((item, index) => ({...item, id: index}));
    return newArr;
  }

  render() {
    return (
      <div className="app">
        <ClubList clubs = {this.state.clubs}/>
      </div>
    );
  }
}

export default App;
