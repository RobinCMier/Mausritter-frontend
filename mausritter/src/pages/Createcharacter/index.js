/*TO DO
concept: 
V user gets here thru buttonlink on homepage
page is a form, that looks similar to the charactersheet but everything is an input field and there's a submit button
on submit, redirect to homepage, and homepage should rerender to show new chaarcter sheet.

In dispatch action, there should be a userId!!!
THIS IS TEMP, should get the token to work actually, and then this would not be needed. 
*/
//tool imports
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
//actions
import { createSheet } from "../../store/sheets/actions";

export default function CreateCharacter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [charName, setCharName] = useState("");
  const [charBackground, setCharBackground] = useState("");
  const [charColor, setCharColor] = useState(""); // add this later
  const [level, setLevel] = useState(); //is this how you fill in null for int?
  const [pips, setPips] = useState();
  const [maxHP, setMaxHP] = useState(); //later say currentHP equals maxHP, this does not have to be an input field
  const [str, setStr] = useState();
  const [dex, setDex] = useState();
  const [will, setWill] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("So you wanna submit huh");
    const currentHP = maxHP;
    const fullSheet = {
      charName,
      charBackground,
      charColor,
      level,
      pips,
      maxHP,
      currentHP,
      str,
      dex,
      will,
    };
    console.log("fullSheet is: ", fullSheet); //object
    dispatch(createSheet(fullSheet));
    // navigate("/");
    //REMOVE THE PARSEINT
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex" }}>
            <h3>Character name:</h3>
            <input
              type="text"
              value={charName}
              name="level"
              onChange={(e) => setCharName(e.target.value)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <h3>Level:</h3>
            <input
              type="number"
              value={level}
              name="level"
              onChange={(e) => setLevel(parseInt(e.target.value))}
            />
          </div>
          <div style={{ display: "flex" }}>
            <h3>Background:</h3>
            <input
              type="text"
              value={charBackground}
              name="charBackground"
              onChange={(e) => setCharBackground(e.target.value)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <p>Pips:</p>
            <input
              type="number"
              value={pips}
              name="pips"
              onChange={(e) => setPips(parseInt(e.target.value))}
            />
          </div>
          <div style={{ display: "flex" }}>
            <p>Max HP: </p>
            <input
              type="number"
              value={maxHP}
              name="maxHP"
              onChange={(e) => setMaxHP(parseInt(e.target.value))}
            />
          </div>
          <div style={{ display: "flex" }}>
            <ul>
              <li>Strength:</li>
              <input
                type="number"
                value={str}
                name="str"
                onChange={(e) => setStr(parseInt(e.target.value))}
              />
              <li>Dexterity:</li>
              <input
                type="number"
                value={dex}
                name="dex"
                onChange={(e) => setDex(parseInt(e.target.value))}
              />
              <li>Willpower: </li>
              <input
                type="number"
                value={will}
                name="will"
                onChange={(e) => setWill(parseInt(e.target.value))}
              />
            </ul>
          </div>
          <button
            type="submit"
            style={{ backgroundColor: "#b1f59d", fontSize: 20 }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
