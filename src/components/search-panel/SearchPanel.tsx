import React, { FunctionComponent } from 'react'
import Button from '../shared/button/Button'
import DateInput from '../shared/date-input/DateInput'
import { SearchPanelType } from './SearchPanelType'

const SearchPanel: FunctionComponent<SearchPanelType> = ({ 
    startDate, 
    endDate, 
    onChangeStartDate, 
    onChangeEndDate, 
    onHandleSearch 
}) => {
    return (
        <>
            <DateInput labelText='Start date:' htmlFor='startDate' date={new Date(startDate)} onChangeDate={onChangeStartDate}/>
            <DateInput labelText='End date:' htmlFor='endDate' date={new Date(endDate)} onChangeDate={onChangeEndDate}/>
            <Button onClick={onHandleSearch}>
                Search
            </Button>
        </>
    )
}

export default SearchPanel