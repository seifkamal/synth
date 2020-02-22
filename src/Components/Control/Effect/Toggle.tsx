import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Typography from '@material-ui/core/Typography';
import Tone from "tone";

interface Props {
    text: string
    effect: Tone.Effect
}

export const Toggle = (props: Props) => {
    const [selected, setSelected] = React.useState(false);

    return (
            <ToggleButton
                size="small"
                value="check"
                selected={selected}
                onChange={() => {
                    const value = !selected;

                    setSelected(value);
                    props.effect.wet.value = Number(value);
                }}
            >
                <Typography>{props.text}</Typography>
            </ToggleButton>
    );
};
