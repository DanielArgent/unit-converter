import React from "react";
import UnitInput from "./UnitInput";
import UnitOutput from "./UnitOutput";
import UnitSwapButton from "./UnitSwapButton";

function makeChanger(f) {
  return (e) => f(parseInt(e.target.options[e.target.selectedIndex].value));
}

function convert(units, value, fromId, toId) {
  let fromUnit = units.find((unit) => unit.id === fromId);
  let toUnit = units.find((unit) => unit.id === toId);

  return toUnit.fromBase(fromUnit.toBase(value));
}

function fixOutOfRange(units, id) {
  if (id >= units.length) {
    return 0;
  }

  return id;
}

export default function CategoryConverter({ name, units, lang }) {
  const [fromUnitValue, setFromUnitValue] = React.useState(0);
  const [fromUnitId, setFromUnitId] = React.useState(units[0].id);
  const [toUnitId, setToUnitId] = React.useState(units[0].id);
  const [hasError, setError] = React.useState(false);

  function swapUnits() {
    let fruname = fromUnitId;
    setFromUnitId(toUnitId);
    setToUnitId(fruname);
  }

  return (
    <div>
      <h4>{name}</h4>

      <UnitInput
        units={units.map((x) => x.name)}
        defaultValue={fromUnitValue}
        unitId={fixOutOfRange(units, fromUnitId)}
        onUnitChange={makeChanger(setFromUnitId)}
        onValueChange={(e) => {
          let value = parseFloat(e.target.value);
          setError(Number.isNaN(value));
					setFromUnitValue(value);
        }}
      />

      <UnitSwapButton onClick={swapUnits} />

      <UnitOutput
        units={units.map((x) => x.name)}
        unitId={fixOutOfRange(units, toUnitId)}
        value={convert(
          units,
          fromUnitValue,
          fixOutOfRange(units, fromUnitId),
          fixOutOfRange(units, toUnitId)
        )}
        onUnitChange={makeChanger(setToUnitId)}
      />

      {hasError && <span className="error">{lang.invalidValue}</span>}
    </div>
  );
}
