import React from 'react';
import CoffeeStore from '../stores/CoffeeStore';
import CoffeeActions from '../actions/CoffeeActions';
import ResultBoard from './ResultBoard.react';
import CoffeeNavbar from './CoffeeNavbar.react';
import PeopleNavbar from './PeopleNavbar.react';

const getCoffeeState = () => ({
  data: CoffeeStore.getAll(),
});

export default class CoffeeApp extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = getCoffeeState();
  }

  componentDidMount() {
    CoffeeStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    CoffeeStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState(getCoffeeState());
  }

  onClickFilter(event) {
    const type = event.target.getAttribute('data-type');
    const id = event.target.getAttribute('data-id');
    CoffeeActions.setFilter(type, id);
  }

  render() {
    return (
      <div>
        <ResultBoard />
        <CoffeeNavbar
          dataCoffee={this.state.data.coffee}
          onClickFilter={this.onClickFilter}
          filterCoffee={this.state.data.filter.whatCoffee}
        />
        <PeopleNavbar
          dataPeople={this.state.data.people}
          onClickFilter={this.onClickFilter}
          filterPeople={this.state.data.filter.whoIs}
        />
      </div>
    );
  }
}
