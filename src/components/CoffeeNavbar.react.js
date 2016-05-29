import React from 'react';
import IconComponent from './IconComponent.react';
import CoffeeActions from '../actions/CoffeeActions';

export default class CoffeeNavbar extends React.Component {
  render() {
    let items = [];

    for (let id in this.props.dataCoffee) {
      items.push(<IconComponent
        dataType="coffee"
        dataId={id}
        isActive={id === this.props.filterCoffee}
        key={id}
        name={this.props.dataCoffee[id].name}
        onClick={this.props.onClickFilter}
      />);
    }
    return (
      <div className="navbar-coffee">
        <IconComponent
          dataType="coffee"
          isActive={'all' === this.props.filterCoffee}
          dataId='all'
          name="All"
          onClick={this.props.onClickFilter}
        />
        {items}
        <IconComponent
          dataType="coffee"
          name="커피 추가"
          onClick={this.props.openModal}
        />
      </div>
    );
  }
}

CoffeeNavbar.propTypes = {

  dataCoffee: React.propTypes.object.isRequired,

};
