import React from 'react';
import { connect } from 'react-redux';

const ClassRoom = (props) => {
    return (
        <div>
            <h2>This is the class room</h2>
            <h3>Where you simply click to see the answers</h3>
            <p>Topic is {props.QType}</p>
        </div>
    )
}

export default ClassRoom;