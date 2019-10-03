import React, { useState } from 'react';
import './assets/scss/style.scss';
import Header from './components/header/header';
import List from './components/list/list';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [changedSearchValue, setChangedSearchValue] = useState('');
  
  const changeDescription = event => {
    setSearchValue(event.target.value);
  }
  const keyPress = event => {
    if(event.keyCode == 13){
      updateList();
    }
  }

  const updateList = () => {
    setChangedSearchValue(searchValue);
  }

  return (
    <div className="app">
      <Header 
        searchValue={searchValue} 
        changeDescription={changeDescription} 
        keyPress={keyPress} 
        updateList={updateList} />
      <List changedSearchValue={changedSearchValue} searchValue={searchValue}/>
    </div>
  );
}

export default App;
