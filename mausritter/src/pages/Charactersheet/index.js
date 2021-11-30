//tool imports
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

//component imports
import { selectToken } from "../../store/user/selectors";
import { selectSheetByName, selectSheets } from "../../store/user/selectors";
import CharacterCard from "../../components/CharacterCard";
import { updateSheet, deleteSheet } from "../../store/user/actions";

//default function
export default function Charactersheet() {
  const dispatch = useDispatch();
  const [readOnly, setReadOnly] = useState(true);
  console.log("What is readOnly? ", readOnly);
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const testSheet = useSelector(selectSheets);
  const params = useParams();
  const charName = params.name;
  const rendersheet = testSheet.find((sheet) => sheet.charName === charName);
  if (token === null) {
    navigate("/");
  }

  const [sheet, setSheet] = useState(rendersheet); //this is too fast
  // console.log("character name is: ", charName);
  console.log("sheet is: ", typeof sheet, sheet);
  if (!sheet) {
    navigate("/");
  }

  useEffect(() => {
    setSheet(rendersheet);
  }, [rendersheet]);

  const onChangeHandler = (event) => {
    console.log("This is the event: ", event.target);
    setSheet({ ...sheet, [event.target.name]: event.target.value });
  };
  const toggleEdit = () => {
    setReadOnly(!readOnly);
    if (readOnly !== true) {
      dispatch(updateSheet(sheet)); //add sheetId
    }
  };
  const onDelete = (id) => {
    console.log("deleting character!", id);
    dispatch(deleteSheet(id));
  };

  return (
    <main className="wrapper">
      <div>
        <div className="characterSheetNav">
          <Link to="/home">
            <button style={{ backgroundColor: "#b1f59d", fontSize: 20 }}>
              Back to homepage
            </button>
          </Link>
          <button>roll dice placeholder</button>
        </div>

        {!sheet ? (
          <div>Loading sheet...</div>
        ) : (
          <div>
            <button onClick={toggleEdit}>Edit your sheet!</button>
            <CharacterCard
              readOnly={readOnly}
              sheet={sheet}
              onChangeHandler={onChangeHandler}
            />
            <button onClick={() => onDelete(sheet.id)}>
              Delete your character
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
