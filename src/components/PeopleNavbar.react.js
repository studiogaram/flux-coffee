import React from 'react';
import IconComponent from './IconComponent.react';
import CoffeeActions from '../actions/CoffeeActions';

export default class PeopleNavbar extends React.Component {
  constructor(props) {
    super(props);

  }

  createPerson() {
    CoffeeActions.createPerson('fad');
  }

  render() {
    let items = [];

    for (let id in this.props.dataPeople) {
      items.push(<IconComponent
        type="person"
        key={id}
        name={this.props.dataPeople[id].name}
        onClick={this.props.onClickFilter}
      />);
    }
    return (
      <div className="navbar-people">
        {items}
        <IconComponent
          type="person"
          name="사람 추가"
          onClick={this.createPerson}
        />
      </div>
    );
  }
}

PeopleNavbar.propTypes = {

};
