import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Typography from '@material-ui/core/Typography';

interface Props {
    text: string
    action: (selected: boolean) => void
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
                props.action(value);
            }}
        >
            <Typography>{props.text}</Typography>
        </ToggleButton>
    );
};
