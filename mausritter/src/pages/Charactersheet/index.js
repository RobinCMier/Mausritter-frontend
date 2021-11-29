//tool imports
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

//component imports
import { selectToken } from "../../store/user/selectors";
import { selectSheetByName } from "../../store/user/selectors";
import CharacterCard from "../../components/CharacterCard";
import { updateSheet } from "../../store/sheets/actions";

//default function
export default function Charactersheet() {
  const dispatch = useDispatch();
  const [readOnly, setReadOnly] = useState(true);
  console.log("What is readOnly? ", readOnly);
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
    // console.log("This is the event: ", event.target);
    setSheet({ ...sheet, [event.target.name]: event.target.value });
  };
  const toggleEdit = () => {
    setReadOnly(!readOnly);
    if (readOnly !== true) {
      //just yeet the whole sheet lol
      dispatch(updateSheet(sheet)); //add sheetId
    }
  };
  //create function to toggle between readonly true and false. When set back on true, dispatch action to save to DB
  //dispatch action needs: the new values (obv), and sheetId to put in request URL.

  return (
    <div>
      <div>
        <Link to="/home">
          <button style={{ backgroundColor: "#b1f59d", fontSize: 20 }}>
            Back to homepage
          </button>
        </Link>
        <button onClick={toggleEdit}>Edit your sheet!</button>
        <CharacterCard
          readOnly={readOnly}
          sheet={sheet}
          onChangeHandler={onChangeHandler}
        />
      </div>
    </div>
  );
}
