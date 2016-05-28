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

    const person = this.props.selectedPeople;
    const coffee = this.props.selectedCoffee;
    console.log(this.props);

    const listHeader = this.props.selectedPeople ? <div className="list-header">
            {person.name}가 먹어왔던 {coffee.name}의 흔적
          </div> : '';
          

    return (
      <div className="board-result">
        <ToolComponent
          createList={this.createList}
        />
        <div className="list">
          {listHeader}
          <div className="list-body">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>먹은 시간</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

ResultBoard.propTypes = {

};
