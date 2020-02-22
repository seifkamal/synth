import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tone from "tone";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Keyboard } from './Keyboard';
import { Oscillator, Toggle, Parameter, effects } from './Control';
import { defaultType } from "./Control/Oscillator";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            maxWidth: 700,
            justifyContent: 'center',
            alignItems: 'center'
        },
        synth: {
            'background-color': 'indianred',
            'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            'background-color': 'bisque'
        }
    }),
);

const effectsChain = Object.entries(effects).map(([name, effect]) => effect);
const synth = new Tone.MonoSynth({oscillator: {type: defaultType}}).chain(...effectsChain, Tone.Master);

export const Synth = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid className={classes.synth} container spacing={2} alignItems="flex-start" justify="center">
                <Grid item xs={12}>
                    <Paper className={classes.paper}>A Synth</Paper>
                </Grid>
                <Grid container item xs={3} direction="column">
                    <Grid item xs={12}>
                        <Oscillator synth={synth}/>
                    </Grid>
                </Grid>
                <Grid container item xs={3} direction="column">
                    <Grid item xs={12}>
                        <Toggle
                            text="Pitch"
                            effect={effects.pitchShift}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Parameter
                            action={(value: number) => effects.pitchShift.pitch = value}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={3} direction="column">
                    <Grid item xs={12}>
                        <Toggle
                            text="Filter"
                            effect={effects.filter}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Parameter
                            min={-40}
                            max={50}
                            action={(value: number) => effects.filter.sensitivity = value}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={3} direction="column">
                    <Grid item xs={12}>
                        <Toggle
                            text="@!%£@"
                            effect={effects.distortion}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Parameter
                            initialValue={1}
                            max={10}
                            action={(value: number) => effects.distortion.distortion = value}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Keyboard synth={synth}/>
                </Grid>
            </Grid>
        </div>
    );
};
