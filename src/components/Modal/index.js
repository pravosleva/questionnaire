import React from 'react';
import ReactModal from 'react-modal';
import Form from './Form';

export default class Modal extends React.Component {
  constructor () {
    super();
    this.state = { showModal: false };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal () { this.setState({ showModal: true }) }
  handleCloseModal () { this.setState({ showModal: false }) }

  render () {
    const { obj } = this.props;

    return (
      <div style={{ marginBottom:'20px'}}>
        <button onClick={this.handleOpenModal} className='btn btn-primary btn-sm pull-right shadow' disabled={obj.selectedFormName!==''?false:true}>Open Modal</button>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           style={{position:'relative'}}
        >
          <button style={{position:'fixed', top:'50px', right:'50px'}} onClick={this.handleCloseModal} className='btn btn-danger btn-sm'>&#10006;&nbsp;Close Modal</button>

          <Form {...this.props} />

        </ReactModal>
      </div>
    );
  }
}
