import React, { Component } from 'react';
import Modal from './Modal';

class AsyncApp extends Component {
  selectHandler(e) {

    this.props.updateSelectedFormName(e.target.value);
  }
  render() {
    const { obj } = this.props;
    return (
      <div className="container">

        <h2>Need to select the equipment</h2>
        <p>
          <code>{obj.selectedFormName!==''?obj.selectedFormName:"nothing"}</code> selected.
        </p>
        <div className='row'>
          <div className='col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-xs-12'>
            <select style={{marginTop:'10px'}} multiple className='form-control input-sm shadow' onChange={this.selectHandler.bind(this)}>
              {
                obj.forms.map(function(e, i) {
                  return <option key={i} value={e.formName}>{e.formName}</option>
                }, this)
              }
            </select>
          </div>
        </div>

        <h2>Open the Form</h2>
        <Modal {...this.props} />

      </div>
    );
  }
}

export default AsyncApp;
