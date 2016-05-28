import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import CoffeeConstants from '../constants/CoffeeConstants';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

const data =
  localStorage.getItem('data') ?
  JSON.parse(localStorage.getItem('data')) : {
    people: {

    },
    coffee: {

    },
    filter: {
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

  data.people[id] = person;
};

const createCoffee = (name) => {
  const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(32);
  const coffee = {
    id,
    name,
    rates: [],
    lists: [],
  };

  data.coffee[id] = coffee;
};

const setFilter = (type, id) => {
  if (type === 'person') {
    data.filter['whoIs'] = id;
  } else if (type === 'coffee') {
    data.filter['whatCoffee'] = id;
  }
};

const removeList = (id, whatCoffee) => {
  // data.coffee[whatCoffee].lists의 에서 id=id인 것을 찾아 지운다.
};

const CoffeeStore = assign({}, EventEmitter.prototype, {

  getAll() {
    console.log(data);
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
    text = action.name.trim();
    if (text !== '') {
      createCoffee(text);
      CoffeeStore.emitChange();
    }
    break;
  case CoffeeConstants.PERSON_CREATE :
    text = action.name.trim();
    if (text !== '') {
      createPerson(text);
      CoffeeStore.emitChange();
    }
    break;
  case CoffeeConstants.SET_FILTER :
    if (text !== '') {
      setFilter(action.type, action.id);
      CoffeeStore.emitChange();
    }
    break;
  default:
    break;
  }
});

module.exports = CoffeeStore;
