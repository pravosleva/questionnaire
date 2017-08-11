export default (
  state = {
    selectedFormName: "",
    comment: "",
    forms: [
      {
        "formName": "Чиллер",
        "inputForms": [
          { "inputType": "input", "label": "Номер задачи", "required": true, "value":"" },
          {
            "inputType": "dropdown",
            "label": "Укажите тип чиллера",
            "required": true,
            "value": "",
            "liquid1TypeValue": "",
            "liquid2TypeValue": "",
            "pumpStationTypeValue": "",
            "equipmentTypelist": [
              {
                "typeName": "AIR-WATER",
                "liquid1Typelist": [
                  { "liquidType": "WATER" },
                  { "liquidType": "MEG", "percentage": "" },
                  { "liquidType": "MPG", "percentage": "" }
                ],
                "pumpStationTypelist": [
                  { "typeName": "1 PUMP" },
                  { "typeName": "1 PUMP + TANK" },
                  { "typeName": "2 PUMPS" },
                  { "typeName": "2 PUMPS + TANK" }
                ]
              },
              {
                "typeName": "WATER-WATER",
                "liquid1Typelist": [
                  { "liquidType": "WATER" },
                  { "liquidType": "MEG", "percentage": "" },
                  { "liquidType": "MPG", "percentage": "" }
                ],
                "liquid2Typelist": [
                  { "liquidType": "WATER" },
                  { "liquidType": "MEG", "percentage": "" },
                  { "liquidType": "MPG", "percentage": "" }
                ]
              },
              {
                "typeName": "CONDENSERLESS",
                "liquid1Typelist": [
                  { "liquidType": "WATER" },
                  { "liquidType": "MEG", "percentage": "" },
                  { "liquidType": "MPG", "percentage": "" }
                ]
              }
            ]
          },
          { "inputType": "input", "label": "Требуемая холодопроизводительность", "required": true, "value":"" },
          { "inputType": "input", "label": "t воды на входе, C", "required": true, "value":"" },
          { "inputType": "input", "label": "t воды на выходе, C", "required": true, "value":"" },
          { "inputType": "input", "label": "Бренд", "required": false, "value":"" }
        ]
      },
      {
        "formName": "Драйкуллер",
        "inputForms": [
          { "inputType": "input", "label": "Номер задачи", "required": true, "value":"" },
          {
            "inputType": "dropdown",
            "label": "Укажите тип жидкости",
            "required": true,
            "value": "",
            "liquid1TypeValue": "",
            "pumpStationTypeValue": "",
            "equipmentTypelist": [
              {
                "typeName": "SELECTED",
                "liquid1Typelist": [
                  { "liquidType": "WATER" },
                  { "liquidType": "MEG", "percentage": "" },
                  { "liquidType": "MPG", "percentage": "" }
                ]
              },
            ]
          },
          { "inputType": "input", "label": "Требуемая холодопроизводительность", "required": true, "value":"" },
          { "inputType": "input", "label": "t воды на входе, C", "required": true, "value":"" },
          { "inputType": "input", "label": "t воды на выходе, C", "required": true, "value":"" },
          { "inputType": "input", "label": "Дополнительные требования", "required": false, "value":"" },
          { "inputType": "input", "label": "Бренд", "required": false, "value":"" }
        ]
      },
      {
        "formName": "Элементы вентиляции / Центральный кондиционер",
        "inputForms": [
          { "inputType": "input", "label": "Номер задачи", "required": true, "value":"" },
          { "inputType": "input", "label": "Расход воздуха", "required": true, "value":"" },
          { "inputType": "input", "label": "Сопротивление сети воздуховодов", "required": true, "value":"" },
          { "inputType": "input", "label": "Бренд", "required": false, "value":"" }
        ]
      },
      {
        "formName": "Градирня",
        "inputForms": [
          { "inputType": "input", "label": "Номер задачи", "required": true, "value":"" },
          {
            "inputType": "dropdown",
            "label": "Укажите тип жидкости",
            "required": true,
            "value": "",
            "liquid1TypeValue": "",
            "pumpStationTypeValue": "",
            "equipmentTypelist": [
              {
                "typeName": "SELECTED",
                "liquid1Typelist": [
                  { "liquidType": "WATER" },
                  { "liquidType": "MEG", "percentage": "" },
                  { "liquidType": "MPG", "percentage": "" }
                ]
              },
            ]
          },
          { "inputType": "input", "label": "Требуемая холодопроизводительность", "required": true, "value":"" },
          { "inputType": "input", "label": "t мокрого термометра", "required": true, "value":"" },
          { "inputType": "input", "label": "Регион", "required": true, "value":"" },
          { "inputType": "input", "label": "Бренд", "required": false, "value":"" }
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
    case 'UPDATE_COMMENT':
      state.comment = action.comment;
      return state;
    default: return state;
  }
};
