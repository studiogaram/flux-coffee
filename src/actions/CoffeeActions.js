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
};

module.exports = CoffeeActions;
