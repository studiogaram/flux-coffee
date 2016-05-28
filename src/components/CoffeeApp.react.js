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
    const filterCoffee = this.state.data.filter.whatCoffee;
    const filterPeople = this.state.data.filter.whoIs;
    const selectedCoffee = filterCoffee === 'all' ? false : this.state.data.coffee[filterCoffee];
    const selectedPeople = filterPeople === 'all' ? false : this.state.data.people[filterPeople];

    const listItems = this.state.data.lists.filter(item =>
      item.person === filterPeople && item.coffee === filterCoffee
    );

    return (
      <div>
        <ResultBoard
          filterCoffee={filterCoffee}
          filterPeople={filterPeople}
          selectedCoffee={selectedCoffee}
          selectedPeople={selectedPeople}
          resultLists={listItems}
        />
        <CoffeeNavbar
          dataCoffee={this.state.data.coffee}
          onClickFilter={this.onClickFilter}
          filterCoffee={filterCoffee}
        />
        <PeopleNavbar
          dataPeople={this.state.data.people}
          onClickFilter={this.onClickFilter}
          filterPeople={filterPeople}
        />
      </div>
    );
  }
}
