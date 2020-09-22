import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import DemonstrationComponent from "./../../Components/DemonstrationComponent/DemonstrationComponent";
import DemonstrationWindow from './../../Components/DemonstrationWindow/DemonstrationWindow';

import './DemonstrationPage.css';

function DemonstrationPage(props) {
    let {id} = useParams();
    console.log(id);

    return (
        <div>
            <div className="DemonstrationStyle">
                <DemonstrationWindow knw={id} />
            </div>
            <div>
                <DemonstrationComponent knw={id}/>
            </div>
        </div>
    )
}

export default DemonstrationPage;
