import React from 'react';
import Club from './Club';
import PropTypes from 'prop-types';
import './ClubList.scss';

class ClubList extends React.Component {
render(){
  return(
    <ul className="clubs__list">
          {this.props.clubs.map(club => (
              <Club 
              key={club.id}
              id={club.id}
              name={club.name}
              fa={club.fa}
              members={club.members}
              />
            )
          )}

        </ul>
  )
}
}

ClubList.propTypes = {
  clubs: PropTypes.arrayOf(PropTypes.object)
}

export default ClubList;