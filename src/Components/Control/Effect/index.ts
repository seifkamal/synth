import Tone from "tone";

export { Parameter } from "./Parameter";
export { Toggle } from "./Toggle";

const pitchShift = new Tone.PitchShift();
pitchShift.wet.value = 0;

const filter = new Tone.AutoWah();
filter.wet.value = 0;

const distortion = new Tone.Distortion();
distortion.wet.value = 0;

export const effects = {
    pitchShift: {
        name: 'Sass',
        object: pitchShift,
        adjective: 'Bad'
    },
    filter: {
        name: 'Wob',
        object: filter,
        adjective: 'Rad'
    },
    distortion: {
        name: '$*¡%',
        object: distortion,
        adjective: 'Mad'
    }
};
