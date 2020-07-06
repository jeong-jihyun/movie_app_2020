import React from 'react';

export default function BlackHole({ name, picture ,rating}) {
  //console.log(props)
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} width="300" alt={name} />
    </div>
  )
}