//tool imports
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";
//component imports
import { selectToken } from "../../store/user/selectors";
import { selectSheetByName } from "../../store/sheets/selectors";
import CharacterCard from "../../components/CharacterCard";

//
/*TO DO
V- add a 'back' button to return to homepage
- MAKE A CSS FILE 
V- create a selector to fetch the details of one specific sheet, 
  the one which has the name of the button pressed => edit url to contain name, then params?
- display the data. 
- add a button to edit this sheet.
- go to backend to make endpoint to edit sheet.
edit toggles betwen read-only true or false.
*/
//default function
export default function Charactersheet() {
  const [readOnly, setReadOnly] = useState(true);
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  if (token === null) {
    navigate("/");
  }
  const params = useParams();
  const charName = params.name;
  const [sheet, setSheet] = useState(useSelector(selectSheetByName(charName))); //object
  // console.log("character name is: ", charName);
  // console.log("sheet is: ", sheet);
  const onChangeHandler = (event) => {
    console.log("This is the event: ", event.target);
    setSheet({ ...sheet, [event.target.name]: event.target.value });
  };
  //create function to toggle between readonly true and false. When set back on true, dispatch action to save to DB

  return (
    <div>
      <div>
        <Link to="/home">
          <button style={{ backgroundColor: "#b1f59d", fontSize: 20 }}>
            Back to homepage
          </button>
        </Link>
        <button onClick={() => setReadOnly(!readOnly)}>Edit your sheet!</button>
        <CharacterCard
          readOnly={readOnly}
          sheet={sheet}
          onChangeHandler={onChangeHandler}
        />
      </div>
    </div>
  );
}
