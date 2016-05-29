import React from 'react';
import Modal from 'react-modal';
import CoffeeActions from '../actions/CoffeeActions';

export default class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ text: '' });
    this.handleChange = this.handleChange.bind(this);
    this.submitModal = this.submitModal.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  createPerson(text) {
    CoffeeActions.createPerson(text);
  }

  createCoffee(text) {
    CoffeeActions.createCoffee(text);
  }

  submitModal() {
    if (this.props.modalFrom === 'coffee') {
      this.createCoffee(this.state.text);
    } else if (this.props.modalFrom === 'person') {
      this.createPerson(this.state.text);
    }
    this.setState({ text: '' });
    this.props.closeModal();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.props.closeModal}
        overlayClassName="modal-overlay"
        className="modal-content"
        closeTimeoutMS={150}
      >
        <button
          type="button"
          onClick={this.props.closeModal}
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >×</button>
        <div className="modal-header">
          <h4 className="modal-title" ref="subtitle">Create new {this.props.modalFrom} </h4>
          <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.</p>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label className="label-control">{this.props.modalFrom} Name</label>
            <input
              autoFocus
              name="listName"
              className="form-control input-block"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={this.submitModal}
          >
          Create </button>
        </div>
      </Modal>
    );
  }
}


ModalComponent.propTypes = {
  closeModal: React.PropTypes.func.isRequired,
  modalIsOpen: React.PropTypes.bool.isRequired,
};

