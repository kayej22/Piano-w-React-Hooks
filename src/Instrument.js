import React, { Fragment, useState } from "react";
import InstrumentAudio from "./Keyboard/InstrumentAudio"
import getNotesBetween from "./utils/getNotesBetween";
import isAccidentalNote from "./utils/isAccidentalNote"

const Instrument = ({ 
  instrumentName,
  startNote,
  endNote,
  renderPianoKey,
  keyboardMap
 }) => {
  const notes = getNotesBetween(startNote, endNote);

  const [state, setState] = useState({
    notesPlaying: []
  });

  const onPlayNoteStart = note => {
    setState({ ...state, notesPlaying: [...state.notesPlaying, note] });
  };

  const onPlayNoteEnd = note => {
    setState({
      ...state,
      notesPlaying:state.notesPlaying.filter(
        notePlaying => notePlaying !== note
      )
    })
  };
  
  return (
    <Fragment>
      {notes.map(note => {
        return (
        <Fragment key={note}>
          {renderPianoKey({
            note,
            isAccidentalNote: isAccidentalNote(note),
            isNotePlaying: state.notesPlaying.includes(note),
            startPlayingNote: () => onPlayNoteStart(note),
            stopPlayingNote: () => onPlayNoteEnd(note),
            keyboardShortcut: getKeyboardShortcutsForNote(keyboardMap, note) 
          })}
        </Fragment>
      );
    })}
      <InstrumentAudio />
    </Fragment>
  );
};

export default Instrument;
