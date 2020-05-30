import React from "react";

const styles = {
  div: {
    marginBottom: "5px",
  },

  input: {
    marginRight: "5px",
    paddingLeft: "5px",
    height: "30px",
    position: "relative",
    width: "169px",
    left: 0,
    outline: "none",
    border: "1px solid #cdcdcd",
    borderColor: "rgba(0, 0, 0, .15)",
  },

  select: {
    border: "none",
  },
};

export default function UnitOutput({ units, unitId, onUnitChange, value }) {
  return (
    <div style={styles.div}>
      <input
        style={styles.input}
        type="text"
        value={Number.isNaN(value) ? "" : value}
        readOnly
      />

      <select style={styles.select} onChange={onUnitChange}>
        {units.map((unit, index) => {
          if (index === unitId) {
            return (
              <option key={index.toString()} value={index} selected>
                {unit}
              </option>
            );
          }

          return (
            <option key={index.toString()} value={index}>
              {unit}
            </option>
          );
        })}
      </select>
    </div>
  );
}
