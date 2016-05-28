import AppDispatcher from '../dispatcher/AppDispatcher';
import CoffeeConstants from '../constants/CoffeeConstants';

const CoffeeActions = {
  createPerson(name) {
    AppDispatcher.dispatch({
      actionType: CoffeeConstants.PERSON_CREATE,
      name,
    });
  },
  createCoffee(name) {
    AppDispatcher.dispatch({
      actionType: CoffeeConstants.COFFEE_CREATE,
      name,
    });
  },
  rateCoffee(person, coffee, rate) {
    AppDispatcher.dispatch({
      actionType: CoffeeConstants.COFFEE_RATE,
      person,
      coffee,
      rate,
    });
  },
  createList(person, coffee) {
    AppDispatcher.dispatch({
      actionType: CoffeeConstants.LIST_CREATE,
      person,
      coffee,
    });
  },
  setFilter(type, id) {
    AppDispatcher.dispatch({
      actionType: CoffeeConstants.SET_FILTER,
      type,
      id,
    });
  },
};

module.exports = CoffeeActions;
