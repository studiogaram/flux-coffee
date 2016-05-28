import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import CoffeeConstants from '../constants/CoffeeConstants';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

const data =
  localStorage.getItem("data") ?
  JSON.parse(localStorage.getItem("data")) : {
  people: {

  },
  coffee: {

  },
  appStatus: {
    whoIs: 'all',
    whatCoffee: 'all',
  },
};

const createPerson = (name) => {
  const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(32);
  const person = {
    id,
    name,
  };

  data.people[name] = person;
};

const createCoffee = (name) => {
  const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(32);
  const coffee = {
    id,
    name,
    rate: 0,
    lists: [],
  };

  data.coffee[name] = coffee;
};

const CoffeeStore = assign({}, EventEmitter.prototype, {

  getAll() {
    return data;
  },

  emitChange() {
    if(typeof(Storage) !== "undefined") {
        localStorage.setItem("data", JSON.stringify(data));
    } else {
      alert('You Need to upgrade Web browser.');
    }
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});

AppDispatcher.register((action) => {
  let text;

  switch (action.actionType) {
  case CoffeeConstants.COFFEE_CREATE :
    text = action.text.trim();
    if (text !== '') {
      createPerson(text);
      CoffeeStore.emitChange();
    }
    break;
  case CoffeeConstants.PERSON_CREATE :
    text = action.text.trim();
    if (text !== '') {
      createPerson(text);
      CoffeeStore.emitChange();
    }
    break;
  default:
    break;
  }
});

module.exports = CoffeeStore;
