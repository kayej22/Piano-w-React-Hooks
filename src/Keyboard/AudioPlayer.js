/*jshint esversion: 6 */
import SoundFontPlayer from "soundfont-player";
import AudioContext from "./AudioContext";

const NullSoundFontPlayerNoteAudio = {
  stop() {}
};

const NullSoundFontPlayer = {
  play() {
    return NullSoundFontPlayerNoteAudio;
  }
};

const AudioPlayer = () => {
  const audioContext = AudioContext && new AudioContext();

  // soundPlayer
  let soundFPlayer = NullSoundFontPlayer;
  
  // setInstrument
  const Player = {
    setInstrument(instrumentName) {
      SoundFontPlayer.instrument(audioContext, instrumentName)
      .then(soundfontPlayer => {
        soundFPlayer = soundfontPlayer;
      })
      .catch(e => {
        soundFPlayer = NullSoundFontPlayer;
      });
    },
    playNote(note) {
      soundFPlayer.play(note);
    }
  };
  return Player;
}
export default AudioPlayer;