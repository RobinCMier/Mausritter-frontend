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
            <button className="regButton">Back to homepage</button>
          </Link>
          <button className="regButton">roll dice placeholder</button>
        </div>

        {!sheet ? (
          <div>Loading sheet...</div>
        ) : (
          <div>
            <div style={{ display: "flex" }}>
              <label class="switch">
                <input type="checkbox" onClick={toggleEdit} />
                <span class="slider round"></span>
              </label>
              {readOnly ? <h3>Edit: off</h3> : <h3>Edit: on</h3>}
            </div>
            <CharacterCard
              readOnly={readOnly}
              sheet={sheet}
              onChangeHandler={onChangeHandler}
            />
            <button
              className="regButton"
              style={{ backgroundColor: "#e34b4b" }}
              onClick={() => onDelete(sheet.id)}
            >
              Delete your character
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
