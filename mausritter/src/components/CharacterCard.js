//import

//function
export default function CharacterCard(props) {
  const { charName, charColor, level, pips, currentHP, maxHP, str, dex, will } =
    props.sheet;
  const { onChangeHandler, readOnly } = props;
  return (
    <div>
      <div>
        <h1 style={{ color: `${charColor}` }}>{charName}</h1>
        <div style={{ display: "flex" }}>
          <h3>Level: {level}</h3>
          <input
            type="number"
            value={level}
            name="level"
            onChange={(event) => onChangeHandler(event)}
            readOnly={readOnly}
          />
        </div>
        <div style={{ display: "flex" }}>
          <h3>Pips: {pips}</h3>
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
          <p>Max HP: {maxHP}</p>
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
            <li>Strength: {str}</li>
            <input
              type="number"
              value={str}
              name="str"
              onChange={(event) => onChangeHandler(event)}
              readOnly={readOnly}
            />
            <li>Dexterity: {dex}</li>
            <input
              type="number"
              value={dex}
              name="dex"
              onChange={(event) => onChangeHandler(event)}
              readOnly={readOnly}
            />
            <li>Willpower: {will}</li>
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
