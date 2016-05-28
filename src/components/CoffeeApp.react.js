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

  onClickFilter() {
    alert('f');
  }

  render() {
    return (
      <div>
        <ResultBoard />
        <CoffeeNavbar
          onClickFilter={this.onClickFilter}
        />
        <PeopleNavbar
          onClickFilter={this.onClickFilter}
        />
      </div>
    );
  }
}
