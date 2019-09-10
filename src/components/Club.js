import React from 'react';
import PropTypes from 'prop-types';
import './Club.scss';

class Club extends React.Component {
  render() {
    return (
      <li className="list__club" id={this.props.id}>
        <div className="club__icon">
          <i className={this.props.fa}></i>
        </div>
        <div className="club__data">
          <h2 className="club__name">{this.props.name}</h2>
          <h3 className="club__members">Members</h3>
          <ul className="members__list">
            {this.props.members.map((member, index) => <li className="list__member" key={index}>{member}</li>)}
          </ul>
        </div>

      </li>
    )
  }
}

Club.propTypes = {
  fa: PropTypes.string,
  name: PropTypes.string,
  members: PropTypes.arrayOf(PropTypes.string)
}

export default Club;