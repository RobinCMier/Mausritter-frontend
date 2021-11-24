//tool imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//comp and action imports
import { fetchAll } from "../../store/sheets/actions";
import { selectUserFull } from "../../store/sheets/selectors";
/*TO DO
create store for sheets
create a thunk first fetching the userId with getState from user reducer
then make thunk request all the sheets from this user
dispatch action to put this in state
useSelector to display the names of the sheets as button links
the buttons link to charactersheet page
the buttons are the coluor indicated in DB
*/
//default function
export default function Homepage() {
  const userFull = useSelector(selectUserFull);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAll);
  }, [dispatch]);
  const sheets = userFull.sheets;

  console.log("this is userFull ", userFull);

  return (
    <div>
      <h1>Welcome back, {userFull.name}</h1>
      <h3>Here are your created character sheets:</h3>
      {!userFull ? (
        <div>Loading your account...</div>
      ) : (
        <div>
          {!sheets ? (
            <div>Loading...</div>
          ) : (
            <div>
              {sheets.map((sheet) => {
                return (
                  <div key={sheet.i}>
                    <button>{sheet.charName}</button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
