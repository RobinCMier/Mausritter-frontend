//tool imports
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
//actions
import { createSheet } from "../../store/user/actions";

export default function CreateCharacter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [charName, setCharName] = useState("");
  const [charBackground, setCharBackground] = useState("");
  // const [charColor, setCharColor] = useState(""); // add this later
  const [level, setLevel] = useState(""); //is this how you fill in null for int?
  const [pips, setPips] = useState("");
  const [maxHP, setMaxHP] = useState(""); //later say currentHP equals maxHP, this does not have to be an input field
  const [str, setStr] = useState("");
  const [dex, setDex] = useState("");
  const [will, setWill] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("So you wanna submit huh");
    const currentHP = maxHP;
    const fullSheet = {
      charName,
      charBackground,
      // charColor,
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
    navigate("/");
  }

  return (
    <main className="wrapper">
      <div>
        <Link to="/home">
          <button className="regButton">Back to Homepage</button>
        </Link>

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
              onChange={(e) => setLevel(e.target.value)}
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
            <ul style={{ listStyle: "none" }}>
              <li>
                Strength:
                <input
                  type="number"
                  value={str}
                  name="str"
                  onChange={(e) => setStr(e.target.value)}
                />
              </li>
              <li>
                Dexterity:
                <input
                  type="number"
                  value={dex}
                  name="dex"
                  onChange={(e) => setDex(e.target.value)}
                />
              </li>
              <li>
                Willpower:
                <input
                  type="number"
                  value={will}
                  name="will"
                  onChange={(e) => setWill(e.target.value)}
                />
              </li>
            </ul>
          </div>
          <button type="submit" className="regButton">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
