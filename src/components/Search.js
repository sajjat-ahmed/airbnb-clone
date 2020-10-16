import React, { useState } from 'react';
import './Search.css';
import PeopleIcon from '@material-ui/icons/People';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';

//DATE PICKER COMPONENT
const Search = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    function handleSelect(range) {
        setStartDate(range.selection.startDate);
        setEndDate(range.selection.endDate);
    }

    return (
        <div className="search">
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>
                Number of guests
                <PeopleIcon />
            </h2>
            <input mai={0}
            defaultValue={2}
             type="text" />
             <Button>Search Airbnb</Button>
        </div>
    );
};

export default Search;