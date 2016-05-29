import React from 'react';
export default class IconComponent extends React.Component {
  render() {
    return (
      <div
        className={this.props.isActive ? 'icon-default active' : 'icon-default' }
        onClick={this.props.onClick}
        data-type={this.props.dataType}
        data-id={this.props.dataId}
        title={this.props.dataType + '의 리스트입니다.'}
      >
        {this.props.name}
      </div>
    );
  }
}

IconComponent.propTypes = {
  dataType: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};
