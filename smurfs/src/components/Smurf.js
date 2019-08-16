import React from 'react';

const Smurf = (props) => {
    console.log(props.smurf);
    return (
        <div className='smurf-card'>
            <h1>{props.smurf.name}</h1>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </div>
    )
}

export default Smurf;
