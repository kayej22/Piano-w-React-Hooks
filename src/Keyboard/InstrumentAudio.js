import React, { useEffect, useState } from "react";
import AudioPlayer from "../src/AudioPlayer";

const InstrumentAudio = ({ instrumentName, notes }) => {
  const [instrumentPlayer, setInstrumentPlayer] = useState(null);

  useEffect(() => {
    setInstrumentPlayer(AudioPlayer());
  }, []);

  useEffect(() => {
    if (instrumentPlayer) {
      setInstrumentPlayer();
      playNotes();
    }

  }, [instrumentPlayer]);

  useEffect(() => {
    if (notes && notes.length > 0) {
      playNotes();
    }
  }, [notes]);

  const setInstrument = () => {
    instrumentPlayer.setInstrument(instrumentName);
  };

  const playNotes = () => {
    if (instrumentPlayer) {
      instrumentPlayer.playNote(notes[0]);
    }
  };

  return null;
};

export default InstrumentAudio;