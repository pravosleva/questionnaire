export default (
  state = {
    selectedFormName: "Product 1",
    forms: [
      {
        "formName": "Чиллер",
        "inputForms": [
          {"type": "input", "label": "Номер задачи", "required": true, "value":""},
          {"type": "input", "label": "Укажите тип чиллера", "required": true, "value":""},
          {"type": "input", "label": "Требуемая холодопроизводительность", "required": true, "value":""},
          {"type": "input", "label": "Бренд", "required": false, "value":""},
          {"type": "input", "label": "Дополнительные требования", "required": false, "value":""}
        ]
      },
      {
        "formName": "Драйкуллер",
        "inputForms": [
          {"type": "input", "label": "Номер задачи", "required": true, "value":""},
          {"type": "input", "label": "Требуемая холодопроизводительность", "required": true, "value":""},
          {"type": "input", "label": "Дополнительные требования", "required": false, "value":""},
          {"type": "input", "label": "Бренд", "required": false, "value":""}
        ]
      }
    ]
  },
  action
) => {
  //console.log(action)
  switch (action.type) {
    case 'UPDATE_SELECTED_FORM_NAME': //console.log(action.addNewSelectionNumberFormState);
      state.selectedFormName = action.selectedFormName;
      return state;
    default: return state;
  }
};
