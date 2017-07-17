export default (
  state = {
    selectedFormName: "Test Form",
    forms: []
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
