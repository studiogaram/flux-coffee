import React from 'react';
import IconComponent from './IconComponent.react';

export default class PeopleNavbar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="navbar-people">
        <IconComponent
          type="person"
          name="test"
          onClick={this.props.onClickFilter}
        />
      </div>
    );
  }
}

PeopleNavbar.propTypes = {

};
