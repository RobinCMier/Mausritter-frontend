//yeets back token for validation
export const selectToken = (state) => state.user.token;
export const selectUserId = (state) => state.user.id;
export const selectUser = (state) => state.user;
export const selectSheetByName = (sheetName) => (reduxState) => {
  const sheet = reduxState.user.sheets.find(
    (sheet) => sheet.charName === sheetName
  );
  return sheet;
};
export const selectSheets = (state) => state.user.sheets;
