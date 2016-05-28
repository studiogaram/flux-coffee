import React from 'react';
export default class ToolComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div
        className="tools"
        >
        <div className="rate-star">
          f
        </div>
        <div
          className="btn-add"
          onClick={this.props.createList}
        >
          + 기록 추가
        </div>
      </div>
    );
  }
}

ToolComponent.propTypes = {
  type: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};
