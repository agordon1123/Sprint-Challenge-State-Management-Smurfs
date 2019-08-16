import React from 'react';
import { connect } from 'react-redux';
import { getSmurfData } from '../actions'

const SmurfList = props => {
    console.log(props)
    return (
        <div>
            <h1>Hello from SmurfList.js</h1>
            <button onClick={props.getSmurfData}>getSmurfData</button>
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
