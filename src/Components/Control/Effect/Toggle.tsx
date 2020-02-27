import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { emphasize } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles((theme: Theme) => {
    const backgroundColor = 'rgb(255, 255, 255)';

    return createStyles({
        toggle: {
            backgroundColor,
            "&:hover": {
                backgroundColor: emphasize(backgroundColor, 0.08)
            },
            width: '60px'
        },
        label: {
            fontFamily: 'IBM Plex Mono, monospace',
        }
    });
});

interface Props {
    text: string
    action: (selected: boolean) => void
}

export const Toggle = (props: Props) => {
    const [selected, setSelected] = React.useState(false);

    const classes = useStyles();

    return (
        <ToggleButton
            className={classes.toggle}
            size="small"
            value="check"
            selected={selected}
            onChange={() => {
                const value = !selected;

                setSelected(value);
                props.action(value);
            }}
        >
            <Typography className={classes.label}>{props.text}</Typography>
        </ToggleButton>
    );
};
