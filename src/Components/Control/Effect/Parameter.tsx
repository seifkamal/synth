import React from 'react';
import Slider from '@material-ui/core/Slider';

interface Props {
    initialValue?: number
    step?: number
    max?: number
    min?: number
    action: (value: number) => void
}

export const Parameter = (props: Props) => {
    const initialValue = props.initialValue ?? 5;
    props.action(initialValue);

    return (
        <div>
            <Slider
                defaultValue={initialValue}
                valueLabelDisplay="auto"
                step={props.step ?? 1}
                min={props.min ?? 0}
                max={props.max ?? 30}
                onChange={(event, value) => props.action(value as number)}
            />
        </div>
    );
};
