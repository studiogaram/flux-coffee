import React from 'react';
export default class ListComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <tr>
        <td>1</td>
        <td>2016-05-12 14:00</td>
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
