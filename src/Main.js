import React from 'react';
import './Main.css';
import Address from './public/Address.js';
import FullName from './public/FullName.js';
import ProfilPhoto from './public/ProfilPhoto.js';


function Main() {
  return (
    <div >
   <h1 className="Main">hello This is page Main.js</h1>
   <ProfilPhoto className="profile"/>
   <FullName />

    <Address />
    

    </div>
  );
}

export default Main;
