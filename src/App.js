import React from 'react';
import './App.scss';
import { clubs } from './clubs';
import ClubList from './components/ClubList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      clubs: this.setId(clubs)
    }
    this.setId = this.setId.bind(this);
    this.filterClubs = this.filterClubs.bind(this);

  };

  setId(arr){
    const newArr = arr.map((item, index) => ({...item, id: index}));
    return newArr;
  };

  filterClubs(event){
    const newQuery = event.currentTarget.value;
    this.setState({
      query: newQuery
    })
  };

  render() {
    return (
      <div className="app">
        <ClubList 
        query = {this.state.query}
        clubs = {this.state.clubs}
        filter = {this.filterClubs}
        />
      </div>
    );
  }
}

export default App;
