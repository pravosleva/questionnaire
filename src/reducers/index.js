export default (
  state = {
    selectedFormName: "",
    forms: [
      {
        "formName": "Чиллер",
        "inputForms": [
          {"inputType": "input", "label": "Номер задачи", "required": true, "value":""},
          {
            "inputType": "dropdown",
            "label": "Укажите тип чиллера",
            "required": true,
            "value":"",
            "equipmentTypelist": [
              {
                "typeName": "AIR-WATER",
                "liquidTypelist": [
                  {
                    "liquidType": "WATER_100"
                  },
                  {
                    "liquidType": "ETHYLENE GLYCOLE",
                    "percentage": ""
                  },
                  {
                    "liquidType": "PROPYLENE GLYCOLE",
                    "percentage": ""
                  }
                ]
              },
              { "typeName": "WATER-WATER" },
              { "typeName": "CONDENSERLESS" }
            ]
          },
          {"inputType": "input", "label": "Требуемая холодопроизводительность", "required": true, "value":""},
          {"inputType": "input", "label": "Бренд", "required": false, "value":""},
          {"inputType": "input", "label": "Дополнительные требования", "required": false, "value":""}
        ]
      },
      {
        "formName": "Драйкуллер",
        "inputForms": [
          {"inputType": "input", "label": "Номер задачи", "required": true, "value":""},
          {"inputType": "input", "label": "Требуемая холодопроизводительность", "required": true, "value":""},
          {"inputType": "input", "label": "Дополнительные требования", "required": false, "value":""},
          {"inputType": "input", "label": "Бренд", "required": false, "value":""}
        ]
      },
      {
        "formName": "Элементы вентиляции / Центральный кондиционер",
        "inputForms": [
          {"inputType": "input", "label": "Номер задачи", "required": true, "value":""},
          {"inputType": "input", "label": "Расход воздуха", "required": true, "value":""},
          {"inputType": "input", "label": "Сопротивление сети воздуховодов", "required": true, "value":""},
          {"inputType": "input", "label": "Бренд", "required": false, "value":""}
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
