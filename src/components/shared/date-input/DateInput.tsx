import React, { FunctionComponent } from 'react';
import { DateInputType } from './DateInputType';
import moment from 'moment'

const DateInput: FunctionComponent<DateInputType> = ({ date, htmlFor, labelText, onChangeDate }) => {
    return(
        <div>
            <label htmlFor={htmlFor}>{labelText}</label>
            <input
                type="date"
                id={htmlFor}
                value={moment(date).format('yyyy-dd-mm').toString()}
                onChange={(e) => onChangeDate(e.target.value)}
            />
        </div>
    )
}

export default DateInput
