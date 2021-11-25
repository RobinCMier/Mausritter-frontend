export const selectUserFull = (state) => state.sheets.userFull;

//get one specific sheet

export const selectSheetByName = (sheetName) => (reduxState) => {
  const sheet = reduxState.sheets.userFull.sheets.find(
    (sheet) => sheet.charName === sheetName
  );
  return sheet;
};
