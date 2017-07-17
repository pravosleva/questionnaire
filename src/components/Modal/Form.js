import React, { Component } from "react";
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputForms: []
    }
    //this.method1 = this.method1.bind(this);
  }
  componentWillMount() {
    const { obj } = this.props;
    let formName = obj.selectedFormName,
      theFormObj = obj.forms.filter((e, i)=>{
        return e.formName===formName
      })[0];
    console.log(theFormObj);
    this.setState({ inputForms: theFormObj.inputForms })
  }
  handler(arrayNum, e) {
    let inputValues = this.state.inputValues;
    inputValues[arrayNum] = e.target.value;
    this.setState({ inputValues })
  }
  render() {
    let formBody = this.state.inputForms.map((e, i)=>{
      return <div key={i}>
        <label>{e.label}</label>
        <input value={this.state.inputForms.value} onChange={()=>{console.log('hello world')}} placeholder={e.required===true?"Обязательно к заполнению":"Необязательно к заполнению"} />
      </div>
    });
    const { obj } = this.props;
    return (
      <div>
        <h2>{obj.selectedFormName}</h2>
        <div className='row'>
          <div className='col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-xs-12'>
            {formBody}
          </div>
        </div>
      </div>
    )
  }
}

export default Form;
