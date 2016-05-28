import React from 'react';
import IconComponent from './IconComponent.react';
import CoffeeActions from '../actions/CoffeeActions';

export default class CoffeeNavbar extends React.Component {
  constructor(props) {
    super(props);

  }

  createCoffee() {
    CoffeeActions.createCoffee('fasd');
  }

  render() {
    let items = [];

    for (let id in this.props.dataCoffee) {
      items.push(<IconComponent
        type="coffee"
        key={id}
        name={this.props.dataCoffee[id].name}
        onClick={this.props.onClickFilter}
      />);
    }
    return (
      <div className="navbar-coffee">
        {items}
        <IconComponent
          type="coffee"
          name="커피 추가"
          onClick={this.createCoffee}
        />
      </div>
    );
  }
}

CoffeeNavbar.propTypes = {

};
