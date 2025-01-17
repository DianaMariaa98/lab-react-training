import React from 'react'

function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} =props;
  return ( 
    <div>
        <img src={picture}></img>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth.toLocaleString()}</p>
        
        
    </div>
  )
}

export default IdCard
