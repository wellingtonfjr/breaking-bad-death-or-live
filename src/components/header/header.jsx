import React, { useState } from 'react';
import logo from '../../assets/img/breaking-bad-logo.png';
import searchIcon from '../../assets/img/icone-search.svg';
import '../../assets/scss/style.scss';

export default props => {

  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <div className="box-input">
        <input  type="text" 
                placeholder="Pesquise os personagens"
                value={props.searchValue} 
                onChange={props.changeDescription} 
                onKeyDown={props.keyPress} />
        <img onClick={props.updateList} className="icon-search" src={searchIcon} alt="Icone search"/>
      </div>
    </header>
  );
}
