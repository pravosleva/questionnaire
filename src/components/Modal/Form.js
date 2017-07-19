import React, { Component } from "react";
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {}
    //this.method1 = this.method1.bind(this);
  }
  handler(label, ev) {//console.log(label);
    ev.stopPropagation();
    const { obj } = this.props;
    let forms = obj.forms;
    forms.map(function(f, i){
      if(obj.selectedFormName===f.formName){
        //console.log(f);
        f.inputForms.map((e, i)=>{
          if(e.label===label){ e.value = ev.target.value }
        });
      }
    }, this);

    this.props.updateForms(forms);
  }
  render() {
    const { obj } = this.props;
    let formName = obj.selectedFormName,
      theFormObj = obj.forms.filter((e, i)=>{ return e.formName===formName })[0],
      element,
      formBody = theFormObj.inputForms.map((e, i)=>{
        let cName = 'text-muted';
        if(e.required===true && e.value===''){
          cName = 'text-danger';
        }else if(e.required===true && e.value!==''){
          cName = 'text-success';
        }else{
          cName = 'text-muted';
        }
        switch(e.inputType){
          case 'input':
            element = <div key={i}>
              <label className={cName}>{e.label}</label>
              <input
                className='form-control input-sm'
                value={e.value}
                onChange={this.handler.bind(this, e.label)}
                placeholder={e.required===true?"Обязательно к заполнению":"Необязательно к заполнению"}
              />
            </div>;
            break;
          case 'dropdown':
            element = <div key={i}>
              <label className={cName}>{e.label}</label>

              <div className="input-group">
                <input
                  className='form-control input-sm'
                  value={e.value}
                  disabled={true}
                />
                <span className="input-group-btn dropdown">
                  <button className={(e.required===true && e.value==='')?"btn btn-sm btn-secondary dropdown-toggle btn-danger":"btn btn-sm btn-secondary dropdown-toggle btn-default"} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {(e.required===true && e.value==='')?<span>NOT SELECTED</span>:<span>{e.value}</span>}&nbsp;&nbsp;<span className="caret"></span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right" role="menu">
                    {
                      e.equipmentTypelist.map((eT, j)=>{
                        return <button key={j} type="button"
                          className="dropdown-item"
                          value={eT.typeName}
                          onClick={this.handler.bind(this, e.label)}
                        >{eT.typeName}
                        </button>
                      })
                    }
                  </div>
                </span>
              </div>

              {
                e.equipmentTypelist.map((eT, j)=>{
                  // --- HUINYA
                  console.log(eT);
                  let element = null;
                  if(eT.liquidTypelist){
                    /*
                    if(eT.typeName===e.value){
                      // Мы работаем с eT (AIR-WATER)
                      // Требуются выбрать тип жидкости (WATER)
                      //...
                      eT.liquidTypelist.map((lT, k)=>{
                        // Для некоторых жидкостей не требуется концентрация (WATER)
                        if(lT.percentage!==undefined){
                          element = <span key={j}>This element have his liquidTypelist & percentage</span>
                        }else{
                          element = <span key={j}>This element have his liquidTypelist, w/o percentage</span>
                        }
                      })
                    }
                    */
                    element = <ul key={j}>
                      {eT.liquidTypelist.map((lT, k)=>{return <li key={k}>{lT.liquidType}</li>})}
                    </ul>;
                  }
                  return element;
                  // ---
                })
              }

            </div>;
            break;
          default:
            element = <div key={i}>
              <label>{e.label}</label>
              <span>Sorry, I don't know this element type...</span>
            </div>
            break;
        };
        return element;
      });
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
