//import

//function
export default function CharacterCard(props) {
  const { onChangeHandler, readOnly } = props;
  return (
    <div>
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
            readOnly={readOnly}
          />
        </div>
        <div style={{ display: "flex" }}>
          <h3>Background:</h3>
          <input
            type="string"
            value={props.sheet.charBackground}
            name="charBackground"
            onChange={(event) => onChangeHandler(event)}
            readOnly={readOnly}
          />
        </div>
        <div style={{ display: "flex" }}>
          <p>Pips:</p>
          <input
            type="number"
            value={props.sheet.pips}
            name="pips"
            onChange={onChangeHandler}
            readOnly={readOnly}
          />
        </div>
        <div style={{ display: "flex" }}>
          <p>Current HP : </p>
          <input
            type="number"
            value={props.sheet.currentHP}
            name="currentHP"
            onChange={(event) => onChangeHandler(event)}
            readOnly={readOnly}
          />
        </div>
        <div style={{ display: "flex" }}>
          <p>Max HP: </p>
          <input
            type="number"
            value={props.sheet.maxHP}
            name="maxHP"
            onChange={(event) => onChangeHandler(event)}
            readOnly={readOnly}
          />
        </div>
        <div style={{ display: "flex" }}>
          <ul>
            <li>Strength:</li>
            <input
              type="number"
              value={props.sheet.str}
              name="str"
              onChange={(event) => onChangeHandler(event)}
              readOnly={readOnly}
            />
            <li>Dexterity:</li>
            <input
              type="number"
              value={props.sheet.dex}
              name="dex"
              onChange={(event) => onChangeHandler(event)}
              readOnly={readOnly}
            />
            <li>Willpower: </li>
            <input
              type="number"
              value={props.sheet.will}
              name="will"
              onChange={(event) => onChangeHandler(event)}
              readOnly={readOnly}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
