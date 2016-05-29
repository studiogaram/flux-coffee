import React from 'react';
import IconComponent from './IconComponent.react';
import CoffeeActions from '../actions/CoffeeActions';

export default class PeopleNavbar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let items = [];

    for (let id in this.props.dataPeople) {
      items.push(<IconComponent
        dataType="person"
        isActive={id===this.props.filterPeople}
        dataId={id}
        key={id}
        name={this.props.dataPeople[id].name}
        onClick={this.props.onClickFilter}
      />);
    }
    return (
      <div className="navbar-people">
        <IconComponent
          dataType="person"
          isActive={'all'===this.props.filterPeople}
          dataId='all'
          name="All"
          onClick={this.props.onClickFilter}
        />
        {items}
        <IconComponent
          dataType="person"
          name="사람 추가"
          onClick={this.props.openModal}
        />
      </div>
    );
  }
}

PeopleNavbar.propTypes = {

};
