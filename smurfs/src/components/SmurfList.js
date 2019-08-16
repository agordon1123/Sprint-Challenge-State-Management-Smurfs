import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSmurfData } from '../actions';
import Smurf from './Smurf';
import FormikLoginForm from './SmurfForm';

const SmurfList = props => {
    return (
        <div>
            <div className='smurflist-upper'>
                <div className='action-container'>
                    <p>Click the Smurfs button below to summon all of the smurfs from the village</p>
                    <button className='button smurf-button' onClick={props.getSmurfData}>Smurfs</button>
                </div>
                <div className='action-container'>
                    <p>Add a new Smurf to the village by completing the field below</p>
                    <FormikLoginForm />
                </div>
            </div>

            <div className='smurfList'>
                {props.smurfData.length ? 
                props.smurfData.map(smurf => (
                    <Smurf smurf={smurf} />
                )) :
                null}
            </div>
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
