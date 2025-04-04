import React, { useState } from "react";
import "./GuitarNeck.css";

interface Fret {
  string: number;
  fret: number;
  selected: boolean;
}

const GuitarNeck: React.FC = () => {
  const [selectedFrets, setSelectedFrets] = useState<Fret[]>([]);

  // Standard tuning strings (from highest to lowest)
  const strings = ["E", "B", "G", "D", "A", "E"];
  const fretCount = 12; // First 12 frets

  const handleFretClick = (string: number, fret: number) => {
    const fretIndex = selectedFrets.findIndex(
      (f) => f.string === string && f.fret === fret
    );

    if (fretIndex >= 0) {
      // Deselect if already selected
      setSelectedFrets(selectedFrets.filter((_, i) => i !== fretIndex));
    } else {
      // Select new fret
      setSelectedFrets([...selectedFrets, { string, fret, selected: true }]);
    }
  };

  return (
    <div className="guitar-neck">
      <div className="strings">
        {strings.map((note, stringIndex) => (
          <div key={stringIndex} className="string-row">
            <div className="open-string">{note}</div>
            {[...Array(fretCount)].map((_, fretIndex) => (
              <div
                key={fretIndex}
                className={`fret ${
                  selectedFrets.some(
                    (f) => f.string === stringIndex && f.fret === fretIndex
                  )
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleFretClick(stringIndex, fretIndex)}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="fret-markers">
        {[3, 5, 7, 9, 12].map((fret) => (
          <div
            key={fret}
            className="marker"
            style={{ left: `${(fret * 100) / 13}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default GuitarNeck;
