import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import React from "react";
import Tone from "tone";

export const defaultType = 'sawtooth';

interface Props {
    synth: Tone.MonoSynth
}

export const Oscillator = (props: Props) => {
    const [type, setType] = React.useState(defaultType);

    return (
        <ToggleButtonGroup
            value={type}
            exclusive
            onChange={(event, value) => {
                setType(value);
                props.synth.oscillator.type = value;
            }}
        >
            <ToggleButton value={defaultType}/>
            <ToggleButton value="square"/>
            <ToggleButton value="sine8"/>
        </ToggleButtonGroup>
    );
};
