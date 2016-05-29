import React from 'react';
import CoffeeStore from '../stores/CoffeeStore';
import CoffeeActions from '../actions/CoffeeActions';
import ResultBoard from './ResultBoard.react';
import CoffeeNavbar from './CoffeeNavbar.react';
import PeopleNavbar from './PeopleNavbar.react';
import ModalComponent from './ModalComponent.react';

const getCoffeeState = () => ({
  data: CoffeeStore.getAll(),
});

export default class CoffeeApp extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = getCoffeeState();
    this.state.modalIsOpen = false;
    this.state.modalFrom = false;
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  openModal(event) {
    this.setState({ modalFrom: event.target.getAttribute('data-type') });
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    console.log(this.state.modalIsOpen);
  }
  render() {
    const filterCoffee = this.state.data.filter.whatCoffee;
    const filterPeople = this.state.data.filter.whoIs;
    const selectedCoffee = filterCoffee === 'all' ? false : this.state.data.coffee[filterCoffee];
    const selectedPeople = filterPeople === 'all' ? false : this.state.data.people[filterPeople];

    let listItems = this.state.data.lists;
    if (filterPeople !== 'all') {
      listItems = listItems.filter(item =>
        item.person === filterPeople
      );
    }
    if (filterCoffee !== 'all') {
      listItems = listItems.filter(item =>
        item.coffee === filterCoffee
      );
    }
    // listItems = this.state.data.lists.filter(item =>
    //   item.person === filterPeople && item.coffee === filterCoffee
    // );

    return (
      <div>
        <ModalComponent
          modalIsOpen={this.state.modalIsOpen}
          modalFrom={this.state.modalFrom}
          openModal={this.openModal}
          closeModal={this.closeModal}
        />
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
          openModal={this.openModal}
        />
        <PeopleNavbar
          dataPeople={this.state.data.people}
          onClickFilter={this.onClickFilter}
          filterPeople={filterPeople}
          openModal={this.openModal}
        />
      </div>
    );
  }
}
