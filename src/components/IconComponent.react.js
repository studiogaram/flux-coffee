import React from 'react';
export default class IconComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div
        className="icon-default"
        onClick={this.props.onClick}
        title={this.props.type+'의 리스트입니다.'}
        >
        {this.props.name}
      </div>
    );
  }
}

IconComponent.propTypes = {
  type: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};
