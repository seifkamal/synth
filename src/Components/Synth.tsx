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

const effectsChain = Object.entries(effects).map(([name, effect]) => effect.object);
const synth = new Tone.MonoSynth({oscillator: {type: defaultType}}).chain(...effectsChain, Tone.Master);

export const Synth = () => {
    const titleDelimiter = " ";
    const [titleAdjectiveString, setTitleAdjectiveString] = React.useState(titleDelimiter);
    const [titleAdjectives]: [{ [effect: string]: string }, any] = React.useState({});

    const classes = useStyles();
    const updateAdjective = (adjective: string, active: boolean) => {
        titleAdjectives[adjective] = active ? adjective : "";
        setTitleAdjectiveString(titleDelimiter + Object.values(titleAdjectives).join(titleDelimiter) + titleDelimiter);
    };

    return (
        <div className={classes.root}>
            <Grid className={classes.synth} container spacing={2} alignItems="center" justify="center">
                <Grid item xs={12}>
                    <Paper className={classes.paper}>My{titleAdjectiveString || titleDelimiter}Synth</Paper>
                </Grid>
                <Grid container item xs={3} alignItems="center" justify="center">
                    <Grid item xs={12}>
                        <Oscillator synth={synth}/>
                    </Grid>
                </Grid>
                <Grid container item xs={3} alignItems="center" justify="center">
                    <Grid item xs={6}>
                        <Toggle
                            text={effects.pitchShift.name}
                            action={(selected => {
                                effects.pitchShift.object.wet.value = Number(selected);
                                updateAdjective(effects.pitchShift.adjective, selected);
                            })}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Parameter
                            action={value => effects.pitchShift.object.pitch = value}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={3} alignItems="center" justify="center">
                    <Grid item xs={6}>
                        <Toggle
                            text={effects.filter.name}
                            action={(selected => {
                                effects.filter.object.wet.value = Number(selected);
                                updateAdjective(effects.filter.adjective, selected);
                            })}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Parameter
                            max={50}
                            action={value => effects.filter.object.sensitivity = value}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={3} alignItems="center" justify="center">
                    <Grid item xs={6}>
                        <Toggle
                            text={effects.distortion.name}
                            action={(selected => {
                                effects.distortion.object.wet.value = Number(selected);
                                updateAdjective(effects.distortion.adjective, selected);
                            })}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Parameter
                            initialValue={1}
                            max={10}
                            action={value => effects.distortion.object.distortion = value}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} alignItems="center" justify="center">
                    <Keyboard synth={synth}/>
                </Grid>
            </Grid>
        </div>
    );
};
