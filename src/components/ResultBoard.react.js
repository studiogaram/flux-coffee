import React from 'react';
import ToolComponent from './ToolComponent.react';
import ListComponent from './ListComponent.react';
import CoffeeActions from '../actions/CoffeeActions';

export default class ResultBoard extends React.Component {
  constructor(props) {
    super(props);
    this.createList = this.createList.bind(this);
  }

  createList() {
    CoffeeActions.createList(this.props.selectedPeople.id, this.props.selectedCoffee.id);
  }

  render() {
    console.log(this.props.resultLists);
    const person = this.props.selectedPeople;
    const coffee = this.props.selectedCoffee;
    let rate = 0;
    if (person && coffee) {
      rate = coffee.rates[person.id] ? coffee.rates[person.id].rate : 0;
    }

    const listHeader = person && coffee && this.props.resultLists.length ?
      <div className="list-header">
        {person.name}이 {coffee.name}를 {this.props.resultLists.length}번이나 먹었어요!
      </div> : '';

    const listBody = person && coffee ?
      this.props.resultLists.length ?
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>먹은 시간</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.resultLists.map((item, i) => {
            return (
              <ListComponent
                key={i}
                time={item.time}
                order={i}
                id={item.id}
              />
            );
          })}
        </tbody>
      </table>
      :
      <div className="list-body-empty">
        <div className="img-empty"></div>
        <p>커피를 마시고 기록을 남겨보세요!</p>
      </div>
      :
      this.props.resultLists.length ? 
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>먹은 시간</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {this.props.resultLists.map((item, i) => {
          return (
            <ListComponent
              key={i}
              time={item.time}
              order={i}
              id={item.id}
            />
          );
        })}
        </tbody>
      </table>
      :
      <div className="list-body-empty">
        <div className="img-empty"></div>
        <p>커피와 사람을 선택해 주세요!</p>
      </div>
      ;

    return (
      <div className="board-result">
        <ToolComponent
          person={person}
          coffee={coffee}
          createList={this.createList}
          currentRate={rate}
        />
        <div className="list">
          {listHeader}
          <div className="list-body">
          {listBody}
          </div>
        </div>
      </div>
    );
  }
}

ResultBoard.propTypes = {

};
