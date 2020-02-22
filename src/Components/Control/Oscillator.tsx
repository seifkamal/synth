import React from "react";
import Tone from "tone";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

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
            <ToggleButton value={defaultType}>
                <SquareFootIcon fontSize="small"/>
            </ToggleButton>
            <ToggleButton value="square">
                <CheckBoxOutlineBlankIcon fontSize="small"/>
            </ToggleButton>
            <ToggleButton value="sine8">
                <RadioButtonUncheckedIcon fontSize="small"/>
            </ToggleButton>
        </ToggleButtonGroup>
    );
};
