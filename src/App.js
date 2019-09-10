import React from 'react';
import './App.scss';
import {clubs} from './clubs';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      clubs: clubs
    }
  }

  render() {
    return (
      <div className="app">
      <ul className="clubs__list">
        <li className="list__club">
          <div className="club__icon">
            <i className={this.state.clubs[0].fa}></i>
          </div>
          <h2 className="club__name">{this.state.clubs[0].name}</h2>
          <h3 className="club__members">Members</h3>
          <ul className="members__list">
            <li className="list__member">{this.state.clubs[0].members[0]}</li>
          </ul>
        </li>
      </ul>
      </div>
    );
  }
}

export default App;
