import React, { Component } from "react";
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {}
    //this.method1 = this.method1.bind(this);
  }
  changeValueLevel1(label, ev) {//console.log(label);
    ev.stopPropagation();
    const { obj } = this.props;
    let forms = obj.forms;
    forms.map(function(f, i){
      if(obj.selectedFormName===f.formName){
        //console.log(f);
        f.inputForms.map((inputForm, i)=>{
          if(inputForm.label===label){ inputForm.value = ev.target.value }
        });
      }
    }, this);

    this.props.updateForms(forms);
  }
  changeComment(e){
    this.props.updateComment(e.target.value)
  }
  changeLiduid1Type(val, ev){
    console.log(val, ev.target.value);
    // Set liquid1 type
    //...
  }
  changeLiduid1Percentage(ev){
    console.log(`Liquid 1 percentage changed to ${ev.target.value}`);
    // Set value for liquid 1
    //...
  }
  changeLiduid2Type(val, ev){
    console.log(val, ev.target.value);
    // Set liquid2 type
    //...
  }
  changeLiduid2Percentage(ev){
    console.log(`Liquid 2 percentage changed to ${ev.target.value}`);
    // Set value for liquid 2
    //...
  }
  changePackagedPumpStation1Variant(val, ev){
    //...
  }
  render() {
    const { obj } = this.props;
    let formName = obj.selectedFormName,
      theFormObj = obj.forms.filter((e, i)=>{ return e.formName===formName })[0],
      element,
      formBody = theFormObj.inputForms.map((inputForm, i)=>{
        //console.log(inputForm.required, typeof inputForm.required);
        let cName;
        switch(inputForm.required){
          case true:
            if(inputForm.value===''){cName = 'text-danger'}else{cName = 'text-success'};
            break;
          default: cName = 'text-muted'; break;
        }
        switch(inputForm.inputType){
          case 'input':
            element = <div key={i}>
              <label className={cName}>{inputForm.label}</label>
              <input
                className='form-control input-sm'
                value={inputForm.value}
                onChange={this.changeValueLevel1.bind(this, inputForm.label)}
                placeholder={inputForm.required===true?"Обязательно к заполнению":"Необязательно к заполнению"}
              />
            </div>;
            break;
          case 'dropdown':
            element = <div key={i}>
              <label className={(inputForm.required===true&&inputForm.value==='')?'text-danger':cName}>{inputForm.label}</label>

              <div className="input-group">
                <input
                  className='form-control input-sm'
                  value={inputForm.value}
                  disabled={true}
                />
                <span className="input-group-btn dropdown">
                  <button className={(inputForm.required===true && inputForm.value==='')?"btn btn-sm btn-secondary dropdown-toggle btn-danger":"btn btn-sm btn-secondary dropdown-toggle btn-default"} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {(inputForm.required===true && inputForm.value==='')?<span>NOT SELECTED</span>:<span>{inputForm.value}</span>}&nbsp;&nbsp;<span className="caret"></span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right" role="menu">
                    {
                      inputForm.equipmentTypelist.map((equipmentType, j)=>{
                        return <button key={j} type="button"
                          className="dropdown-item"
                          value={equipmentType.typeName}
                          onClick={this.changeValueLevel1.bind(this, inputForm.label)}
                        >{equipmentType.typeName}
                        </button>
                      })
                    }
                  </div>
                </span>
              </div>

              {
                inputForm.equipmentTypelist.map((equipmentType, j)=>{
                  // --- IN PROCESS
                  let subelement1 = null,
                    subelement2 = null,
                    subelement3 = null;
                  // Set subelement1
                  if("liquid1Typelist" in equipmentType && inputForm.value===equipmentType.typeName){
                    subelement1 = <span name='liquid1Typelist'>
                      <label>Liquid 1</label>
                      <ul name='liquidTypelist'>
                        {
                          equipmentType.liquid1Typelist.map((liquidTypeElement, k)=>{
                            let liquidTypeRadio = <input key={k} type='radio' name='_liquid1Type'
                                                    value={liquidTypeElement.typeName}
                                                    onClick={this.changeLiduid1Type.bind(this, liquidTypeElement.liquidType)}
                                                  />,
                              inputPercentage = null;
                            if("percentage" in liquidTypeElement){
                              inputPercentage = <span>
                                <input className='form-control input-sm'
                                  style={{width:'50px', display:'inline'}}
                                  type='text'
                                  onChange={this.changeLiduid1Percentage.bind(this)}
                                />
                              </span>;
                            }
                            return <li key={k}>
                              {liquidTypeRadio} {inputPercentage} {liquidTypeElement.liquidType}
                            </li>
                          })
                        }
                      </ul>
                    </span>;
                  };
                  // Set subelement2
                  if("liquid2Typelist" in equipmentType && inputForm.value===equipmentType.typeName){
                    subelement2 = <span name='liquid2Typelist'>
                      <label>Liquid 2</label>
                      <ul name='liquidTypelist'>
                        {
                          equipmentType.liquid2Typelist.map((liquidTypeElement, k)=>{
                            let liquidTypeRadio = <input key={k} type='radio' name='_liquid2Type'
                                                    value={liquidTypeElement.typeName}
                                                    onClick={this.changeLiduid2Type.bind(this, liquidTypeElement.liquidType)}
                                                  />,
                              inputPercentage = null;
                            if("percentage" in liquidTypeElement){
                              inputPercentage = <span>
                                <input className='form-control input-sm'
                                  style={{width:'50px', display:'inline'}}
                                  type='text'
                                  onChange={this.changeLiduid2Percentage.bind(this)}
                                />
                              </span>;
                            }
                            return <li key={k}>
                              {liquidTypeRadio} {inputPercentage} {liquidTypeElement.liquidType}
                            </li>
                          })
                        }
                      </ul>
                    </span>;
                  };
                  // Set subelement3
                  if("pumpStationTypelist" in equipmentType && inputForm.value===equipmentType.typeName){
                    subelement3 = <span>
                      <label>Pump Station Type</label>
                      <ul name='liquidTypelist'>
                        {
                          equipmentType.pumpStationTypelist.map((pumpStationElement, k)=>{
                            let stationType = <input key={k} type='radio' name='_pumpStationType'
                                                    value={pumpStationElement.typeName}
                                                    onClick={this.changePackagedPumpStation1Variant.bind(this, pumpStationElement.typeName)}
                                                  />,
                              inputPercentage = null;
                            return <li key={k}>
                              {stationType} {pumpStationElement.typeName}
                            </li>
                          })
                        }
                      </ul>
                    </span>;
                  };
                  return <div key={j} className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                      {subelement1}
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                      {subelement2}
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                      {subelement3}
                    </div>
                  </div>;
                  // --- ---
                })
              }

            </div>;
            break;
          default:
            element = <div key={i}>
              <label>{inputForm.label}</label>
              <span>Sorry, I don't know this element type...</span>
            </div>
            break;
        };
        return element;
      });
    let comment = <span>
      <label className='text-muted'>Comment</label>
      <textarea className='form-control' value={obj.comment} style={{resize:'vertical'}} onChange={this.changeComment.bind(this)}></textarea>
    </span>;
    return (
      <div>
        <h2>{obj.selectedFormName}</h2>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
            {formBody}
          </div>
          <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
            {comment}
          </div>
        </div>
      </div>
    )
  }
}

export default Form;
