//tool imports
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
//component imports
import { selectToken } from "../../store/user/selectors";
import { selectSheetByName } from "../../store/sheets/selectors";

//
/*TO DO
V- add a 'back' button to return to homepage
- MAKE A CSS FILE 
V- create a selector to fetch the details of one specific sheet, 
  the one which has the name of the button pressed => edit url to contain name, then params?
- display the data. 
- add a button to edit this sheet.
- go to backend to make endpoint to edit sheet.
*/
//default function
export default function Charactersheet() {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  if (token === null) {
    navigate("/");
  }
  const params = useParams();
  const charName = params.name;
  const sheet = useSelector(selectSheetByName(charName));
  console.log("character name is: ", charName);
  console.log("sheet is: ", sheet);
  return (
    <div>
      <div>
        <Link to="/home">
          <button style={{ backgroundColor: "#b1f59d", fontSize: 20 }}>
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  );
}
