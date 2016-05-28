import React from 'react';
import IconComponent from './IconComponent.react';

export default class CoffeeNavbar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="navbar-coffee">
        <IconComponent
          type="coffee"
          name="test"
          onClick={this.props.onClickFilter}
        />
      </div>
    );
  }
}

CoffeeNavbar.propTypes = {

};
