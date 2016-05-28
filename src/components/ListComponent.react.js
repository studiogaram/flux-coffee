import React from 'react';
export default class ListComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    let today = new Date(this.props.time);
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //  1월은 0으로나옴
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    today = `${mm}-${dd} ${hours}:${minutes}`;

    return (
      <tr>
        <td>{this.props.order}</td>
        <td>{today}</td>
        <td><button>Remove</button></td>
      </tr>
    );
  }
}

ListComponent.propTypes = {
  type: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};
