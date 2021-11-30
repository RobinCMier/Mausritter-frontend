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
            <h1 style={{ color: `${props.sheet.charColor}` }}>
              {props.sheet.charName}
            </h1>
            <div style={{ display: "flex" }}>
              <h3>Level: {props.sheet.level}</h3>
            </div>
            <div style={{ display: "flex" }}>
              <h3>Background: {props.sheet.charBackground}</h3>
            </div>
            <div style={{ display: "flex" }}>
              <p>Pips:{props.sheet.pips}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>Current HP :{props.sheet.currentHP} </p>
            </div>
            <div style={{ display: "flex" }}>
              <p>Max HP: {props.sheet.maxHP} </p>
            </div>
            <div style={{ display: "flex" }}>
              <ul style={{ listStyle: "none" }}>
                <li>Strength: {props.sheet.str}</li>
                <li>Dexterity:{props.sheet.dex}</li>
                <li>Willpower:{props.sheet.will}</li>
              </ul>
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
