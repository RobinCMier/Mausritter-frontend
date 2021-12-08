//import

//function
export default function CharacterCard(props) {
  const { onChangeHandler, readOnly } = props;
  //conditional rendering: if readonly false then input, if true then text.
  return (
    <div>
      {readOnly ? (
        <div>
          <div>
            <h1
              className="charName"
              style={{ color: `${props.sheet.charColor}` }}
            >
              {props.sheet.charName}
            </h1>
            <div style={{ display: "flex" }}>
              <p className="statText">Level:</p> {props.sheet.level}
            </div>
            <div style={{ display: "flex" }}>
              <p className="statText">Background: </p>
              {props.sheet.charBackground}
            </div>
            <div style={{ display: "flex" }}>
              <p className="statText">Pips:</p>
              {props.sheet.pips}
            </div>
            <div style={{ display: "flex" }}>
              <p className="statText">Current HP :</p>
              {props.sheet.currentHP}
            </div>
            <div style={{ display: "flex" }}>
              <p className="statText">Max HP: </p>
              {props.sheet.maxHP}
            </div>
            <div style={{ display: "flex" }}>
              <p className="statText">Strength: </p>
              {props.sheet.str}
            </div>
            <div style={{ display: "flex" }}>
              <p className="statText">Dexterity: </p>
              {props.sheet.dex}
            </div>
            <div style={{ display: "flex" }}>
              <p className="statText">Willpower: </p>
              {props.sheet.will}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 style={{ color: `${props.sheet.charColor}` }}>
            {props.sheet.charName}
          </h1>
          <div style={{ display: "flex" }}>
            <h3>Level:</h3>
            <input
              type="number"
              value={props.sheet.level}
              name="level"
              onChange={(event) => onChangeHandler(event)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <h3>Background:</h3>
            <input
              type="string"
              value={props.sheet.charBackground}
              name="charBackground"
              onChange={(event) => onChangeHandler(event)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <p>Pips:</p>
            <input
              type="number"
              value={props.sheet.pips}
              name="pips"
              onChange={onChangeHandler}
            />
          </div>
          <div style={{ display: "flex" }}>
            <p>Current HP : </p>
            <input
              type="number"
              value={props.sheet.currentHP}
              name="currentHP"
              onChange={(event) => onChangeHandler(event)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <p>Max HP: </p>
            <input
              type="number"
              value={props.sheet.maxHP}
              name="maxHP"
              onChange={(event) => onChangeHandler(event)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <ul style={{ listStyle: "none" }}>
              <li>
                Strength:
                <input
                  type="number"
                  value={props.sheet.str}
                  name="str"
                  onChange={(event) => onChangeHandler(event)}
                />
              </li>
              <li>
                Dexterity:
                <input
                  type="number"
                  value={props.sheet.dex}
                  name="dex"
                  onChange={(event) => onChangeHandler(event)}
                />
              </li>
              <li>
                Willpower:
                <input
                  type="number"
                  value={props.sheet.will}
                  name="will"
                  onChange={(event) => onChangeHandler(event)}
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
