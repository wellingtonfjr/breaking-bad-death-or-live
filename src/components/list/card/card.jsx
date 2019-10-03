import React from 'react';
import './card.scss';
import star from '../../../assets/img/star.svg';

export default props => {
  const character = props.character;
  let backgroundImage = {
    backgroundImage: `url(${character.img})`
  }
  return (
    <div className="card" style={backgroundImage}>
      <div className="death-or-alive">
        <span className={
          character.status === 'Presumed dead' ? 'Presumed-dead' : 
          character.status === 'Deceased' ? 'deceased' : 
          character.status === 'Alive' ? 'alive' : ''
        }>{
            character.status === 'Presumed dead' ? 'Presumo morto' : 
            character.status === 'Deceased' ? 'Morto' : 
            character.status === 'Alive' ? 'Vivo' : ''
          }
          </span>
      </div>
        
      <div className="other-info">
        <h2 className="name">{character.name}</h2>
        <div className="was-born"><img className="star" src={star}></img><span>{character.birthday}</span></div>
        <div className="work">{character.occupation.map(occupation => occupation)}</div>
      </div>
    </div>
  )
}