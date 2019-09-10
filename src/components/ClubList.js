import React from 'react';
import Club from './Club';
import PropTypes from 'prop-types';
import './ClubList.scss';

class ClubList extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="filter" className="club__filter-label">Filtra tu búsqueda</label>
        <input id="filter" type="text" className="club__filter" onChange={this.props.filter} />
        <ul className="clubs__list">
          {this.props.clubs
            .filter(club => club.name.toLowerCase().includes(this.props.query))
            .map(club => (
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
      </>
    )
  }
}

ClubList.propTypes = {
  clubs: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.func,
  query: PropTypes.string
}

export default ClubList;