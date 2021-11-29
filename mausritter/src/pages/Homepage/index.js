//tool imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
//comp and action imports
import { selectToken } from "../../store/user/selectors";
import { selectUser } from "../../store/user/selectors";
import { selectSheets } from "../../store/user/selectors";

/*TO DO
After editing sheet, these changes do not update from homepage. Going back to homepage
and then again to sheet, shows the sheet is not updated. This because the new sheets get plunked in user
rather than user. sheets. 
*/
//default function
export default function Homepage() {
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const sheets = useSelector(selectSheets);
  //recycle this for every page:
  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, [token]);

  // console.log("this is userFull ", userFull);
  // console.log("this is sheets: ", sheets);

  return (
    <div>
      <h1>Welcome back, {user.name}</h1>
      <Link to="/sheet/create">
        <button
          style={{
            backgroundColor: "#b1f59d",
            fontSize: 30,
          }}
        >
          Create a new character!
        </button>
      </Link>
      <h3>Here are your created character sheets:</h3>
      {!user ? (
        <div>Loading your account...</div>
      ) : (
        <div>
          {!sheets ? (
            <div>Loading...</div>
          ) : (
            <div>
              {sheets.map((sheet) => {
                return (
                  <div key={sheet.id}>
                    <Link to={`/sheet/${sheet.charName}`}>
                      <button
                        style={{
                          backgroundColor: `${sheet.charColor}`,
                          fontSize: 30,
                        }}
                      >
                        {sheet.charName}
                      </button>
                    </Link>
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
