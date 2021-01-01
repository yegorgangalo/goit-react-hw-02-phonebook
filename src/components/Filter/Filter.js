import React from 'react';

function Filter ({value, onChange}) {
        return <label>
            Find contacts by name / number / exp
            <input type="text" name="filter" value={value} onChange={onChange} />
            </label>
}

export default Filter;