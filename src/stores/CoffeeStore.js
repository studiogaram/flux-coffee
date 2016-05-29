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
    lists: [],
  };

const createPerson = (name) => {
  const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(32);
  const person = {
    id,
    name,
  };
  if (!Object.keys(data.people).length) {
    data.filter['whoIs'] = id;
  }
  data.people[id] = person;
};

const createCoffee = (name) => {
  const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(32);
  const coffee = {
    id,
    name,
    rates: {},
  };
  if (!Object.keys(data.coffee).length) {
    data.filter['whatCoffee'] = id;
  }
  data.coffee[id] = coffee;
};

const rateCoffee = (person, coffee, rate) => {
  const rateInfo = {
    person,
    rate,
  };

  data.coffee[coffee].rates[person] = rateInfo;
};

const createList = (person, coffee) => {
  const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(32);
  const list = {
    id,
    person,
    coffee,
    time: (+new Date()),
  };

  data.lists.push(list);
};

const setFilter = (type, id) => {
  if (type === 'person') {
    data.filter['whoIs'] = id;
  } else if (type === 'coffee') {
    data.filter['whatCoffee'] = id;
  }
};

const removeList = (id) => {
  data.lists = data.lists.filter(item =>
    item.id !== id
  );
};

const CoffeeStore = assign({}, EventEmitter.prototype, {

  getAll() {
    return data;
  },

  emitChange() {
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('data', JSON.stringify(data));
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
  case CoffeeConstants.PERSON_CREATE :
    text = action.name.trim();
    if (text !== '') {
      createPerson(text);
      CoffeeStore.emitChange();
    }
    break;
  case CoffeeConstants.COFFEE_CREATE :
    text = action.name.trim();
    if (text !== '') {
      createCoffee(text);
      CoffeeStore.emitChange();
    }
    break;
  case CoffeeConstants.COFFEE_RATE :
    if (text !== '') {
      rateCoffee(action.person, action.coffee, action.rate);
      CoffeeStore.emitChange();
    }
    break;
  case CoffeeConstants.LIST_CREATE :
    if (text !== '') {
      createList(action.person, action.coffee);
      CoffeeStore.emitChange();
    }
    break;
  case CoffeeConstants.LIST_REMOVE :
    if (text !== '') {
      removeList(action.id);
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
