import React from 'react';
import ReactStars from 'react-stars'
import CoffeeActions from '../actions/CoffeeActions';

export default class ToolComponent extends React.Component {
  constructor(props) {
    super(props);
    this.rateCoffee = this.rateCoffee.bind(this);
  }

  rateCoffee(newValue) {
    CoffeeActions.rateCoffee(this.props.person.id, this.props.coffee.id, newValue);
  }

  render() {
    return (
      <div
        className="tools"
        >
        <div className="rate-star">
          <ReactStars
            count={5}
            size={24}
            onChange={this.rateCoffee}
            value={this.props.currentRate}
            color2={'#ffd700'}
          />
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
