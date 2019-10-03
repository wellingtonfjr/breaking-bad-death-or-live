import React, { useState, useEffect } from 'react';
import Card from './card/card';
import axios from 'axios';
import card from './card/card';

const URL = 'https://www.breakingbadapi.com/api';

export default props => {
  const [listCharacters, setlistCharacters] = useState([]);
  const mountAPI = `${URL}/characters?name=${props.searchValue}`
  
  const getList = () => {
    axios.get(mountAPI)
      .then(result => {
        setlistCharacters(result.data)
      })  
  }
  
  useEffect(() => {
    getList();
  }, [props.changedSearchValue]);

  return (
    <div>
      <h1>Personagens</h1>
      {
        listCharacters.map((character) => (
          <Card key={character.char_id} character={character} />
        ))
      }
      {/* <Card /> */}
    </div>
  )
}