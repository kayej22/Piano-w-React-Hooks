import React, { Fragment } from "react";
import InstrumentAudio from "./Keyboard/InstrumentAudio"
import getNotesBetween from "./utils/getNotesBetween";

const Instrument = ({ instrumentName, startNote, endNote }) => {
  const notes = getNotesBetween(startNote, endNote);
  return (
    <Fragment>
      {notes.map(note => {
        return <Fragment>Note is : {note}</Fragment>
      })}
      <InstrumentAudio />
    </Fragment>
  );
};

export default Instrument;
