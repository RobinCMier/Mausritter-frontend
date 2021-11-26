//import

//function
export default function CharacterCard(props) {
  const {
    charName,
    charBackground,
    charColor,
    level,
    pips,
    currentHP,
    maxHP,
    str,
    dex,
    will,
  } = props.sheet;
  const { onChangeHandler, readOnly } = props;
  return (
    <div>
      <div>
        <h1 style={{ color: `${charColor}` }}>{charName}</h1>
        <div style={{ display: "flex" }}>
          <h3>Level:</h3>
          <input
            type="number"
            value={level}
            name="level"
            onChange={(event) => onChangeHandler(event)}
            readOnly={readOnly}
          />
        </div>
        <div style={{ display: "flex" }}>
          <h3>Background:</h3>
          <input
            type="string"
            value={charBackground}
            name="charBackground"
            onChange={(event) => onChangeHandler(event)}
            readOnly={readOnly}
          />
        </div>
        <div style={{ display: "flex" }}>
          <p>Pips:</p>
          <input
            type="number"
            value={pips}
            name="pips"
            onChange={(event) => onChangeHandler(event)}
            readOnly={readOnly}
          />
        </div>
        <div style={{ display: "flex" }}>
          <p>Current HP : </p>
          <input
            type="number"
            value={currentHP}
            name="currentHP"
            onChange={(event) => onChangeHandler(event)}
            readOnly={readOnly}
          />
        </div>
        <div style={{ display: "flex" }}>
          <p>Max HP: </p>
          <input
            type="number"
            value={maxHP}
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
              value={str}
              name="str"
              onChange={(event) => onChangeHandler(event)}
              readOnly={readOnly}
            />
            <li>Dexterity:</li>
            <input
              type="number"
              value={dex}
              name="dex"
              onChange={(event) => onChangeHandler(event)}
              readOnly={readOnly}
            />
            <li>Willpower: </li>
            <input
              type="number"
              value={will}
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
