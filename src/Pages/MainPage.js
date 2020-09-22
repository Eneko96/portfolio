import React, { useState } from 'react';
import NavigationBar from './../Components/NavBarComponent/NavBar';
import CVComponent from './../Components/CVComponent/CVComponent';
import './MainPage.css';

function MainPage(props) {
  const [langParent,setLangparent] = useState('ENG');
  const [knowldg, setKnowldg] = useState('none');
  console.log(knowldg);
  return (
    <div className="Whole">
      <div>
        <NavigationBar childLang={lang => setLangparent(lang)}/>
        <CVComponent language={langParent} history={props.history} childKnowldg={knowldg => setKnowldg(knowldg)}/>
      </div>
    </div>
  )
}

export default MainPage;
