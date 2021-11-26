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

export default function CreateCharacter() {
  const [charName, setCharName] = useState("");
  const [charBackground, setCharBackgroun] = useState("");
  const [charColor, setCharColor] = useState(""); // add this later
  const [level, setLevel] = useState(); //is this how you fill in null for int?
  const [pips, setPips] = useState();
  const [maxHP, setMaxHP] = useState(); //later say currentHP equals maxHP, this does not have to be an input field
  const [str, setStr] = useState();
  const [dex, setDex] = useState();
  const [will, setWill] = useState();

  return (
    <div>
      <div>
        <div style={{ display: "flex" }}>
          <h3>Character name:</h3>
          <input
            type="string"
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
            onChange={(e) => setLevel(e.target.value)}
          />
        </div>
        <div style={{ display: "flex" }}>
          <h3>Background:</h3>
          <input
            type="string"
            value={charBackground}
            name="charBackground"
            onChange={(e) => setCharBackgroun(e.target.value)}
          />
        </div>
        <div style={{ display: "flex" }}>
          <p>Pips:</p>
          <input
            type="number"
            value={pips}
            name="pips"
            onChange={(e) => setPips(e.target.value)}
          />
        </div>
        <div style={{ display: "flex" }}>
          <p>Max HP: </p>
          <input
            type="number"
            value={maxHP}
            name="maxHP"
            onChange={(e) => setMaxHP(e.target.value)}
          />
        </div>
        <div style={{ display: "flex" }}>
          <ul>
            <li>Strength:</li>
            <input
              type="number"
              value={str}
              name="str"
              onChange={(e) => setStr(e.target.value)}
            />
            <li>Dexterity:</li>
            <input
              type="number"
              value={dex}
              name="dex"
              onChange={(e) => setDex(e.target.value)}
            />
            <li>Willpower: </li>
            <input
              type="number"
              value={will}
              name="will"
              onChange={(e) => setWill(e.target.value)}
            />
          </ul>
        </div>
        <button style={{ backgroundColor: "#b1f59d", fontSize: 20 }}>
          Submit
        </button>
      </div>
    </div>
  );
}
