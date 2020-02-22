import React from 'react';
import Tone from "tone";
import 'react-piano/dist/styles.css';
import './Keyboard.css';

const Piano = require("react-piano");

interface Props {
    synth: Tone.MonoSynth
}

export const Keyboard = (props: Props) => {
    const firstNote = Piano.MidiNumbers.fromNote('c4');
    const lastNote = Piano.MidiNumbers.fromNote('f5');
    const keyboardShortcuts = Piano.KeyboardShortcuts.create({
        firstNote: firstNote,
        lastNote: lastNote,
        keyboardConfig: Piano.KeyboardShortcuts.HOME_ROW,
    });

    return (
        <Piano.Piano
            noteRange={{first: firstNote, last: lastNote}}
            playNote={(midiNumber: number) => {
                props.synth.triggerAttack(midiNumber);
            }}
            stopNote={(midiNumber: number) => {
                props.synth.triggerRelease();
            }}
            width={700}
            keyboardShortcuts={keyboardShortcuts}
        />
    );
};
