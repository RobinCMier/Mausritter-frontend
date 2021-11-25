//tool imports
import { Link } from "react-router-dom";
import { useParams } from "react-router";

//
/*TO DO
V- add a 'back' button to return to homepage
- create a selector to fetch the details of one specific sheet, 
  the one which has the name of the button pressed => edit url to contain name, then params?
- display the data. 
- add a button to edit this sheet.
- go to backend to make endpoint to edit sheet.
*/
//default function
export default function Charactersheet() {
  const params = useParams();
  const charName = params.name;
  console.log("character name is: ", charName);
  return (
    <div>
      <div>
        <Link to="/">
          <button style={{ backgroundColor: "#b1f59d", fontSize: 20 }}>
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  );
}
