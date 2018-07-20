import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {

    function average(data) {
        let result = 0;
        data.map((data => result += data))
        return Math.round(result / data.length);
    }

    return (
        <div>
            <Sparklines height={120} weight={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div> {average(props.data)} {props.units} </div>
        </div>
    );
}