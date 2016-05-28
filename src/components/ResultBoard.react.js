import React from 'react';
import ToolComponent from './ToolComponent.react';
import ListComponent from './ListComponent.react';

export default class ResultBoard extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="board-result">
        <ToolComponent />
        <div className="list">
          <div className="list-header">
            ffff
          </div>
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
                <ListComponent />
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
