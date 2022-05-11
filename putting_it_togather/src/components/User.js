import React, { useState } from 'react'

const User = (props) => {
    const {first_name, last_name, age, hair_color} = props;
    const [ stateAge , setsateAge ]= useState(age);
    const addAge = () => {
        setsateAge(stateAge + 1);
    }
    return (
        <div>
            <h1> {last_name}, {first_name} </h1>
            <p> Age : {stateAge} </p>
            <p> Hair Color : {hair_color} </p>
            <button onClick={addAge}> Birthday Button for {first_name} {last_name}</button>
        </div>
    );
}

export default User;