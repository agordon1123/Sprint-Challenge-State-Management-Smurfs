import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSmurfData } from '../actions';
import Smurf from './Smurf';
import FormikLoginForm from './SmurfForm';

const SmurfList = props => {
    console.log(props)

    // const handleChanges = e => {
    //     setState({ newSmurf: e.target.value })
    // }

    return (
        <div>
            <h1>Hello from SmurfList.js</h1>
            <button onClick={props.getSmurfData}>getSmurfData</button>

            <div className='smurfList'>
                {props.smurfData.length ? 
                props.smurfData.map(smurf => (
                    <Smurf smurf={smurf} />
                )) :
                null}
            </div>
            <FormikLoginForm />
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        error: state.error,
        isLoading: state.isLoading,
        smurfData: state.smurfData
    }
}

export default connect(mapStateToProps, { getSmurfData })(SmurfList);
