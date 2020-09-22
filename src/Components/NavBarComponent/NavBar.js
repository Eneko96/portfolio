import React, { useState } from 'react';
import './NavBar.css';


function language(key) {
  var ret;
  switch (key) {
    case 'ESP':
      ret = 'ESP';
      break;

    default:
      ret = 'ENG';
      break;
  }
  return ret;
}



function NavigationBar(props) {
  const [lang, setlang] = useState('ENG');
  props.childLang(lang)
  return (
    <div className="Head">
      <div className="titleSyle">
        CURRICULUM VITAE
      </div>
      <div className="Lang">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {lang}
        </button>
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={() => setlang(language('ENG'))}>ENG</div>
          <div className="dropdown-item" onClick={() => setlang(language('ESP'))}>ESP</div>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar;
