import React from 'react';
import demonstrationsamples from './../../Demonstration constants/demonstrationsamples.json';

import './DemonstrationComponent.css';

console.log(demonstrationsamples.react);

function DemonstrationComponent(props) {

    function setType() {
        let type;
        if (props.knw !== undefined || null) {
            type = props.knw.toLowerCase();
        }
        return type;
    }
    setType();

    console.log(props);
    return (
        <div>
            <h2>{props.knw} Code Example</h2>
            <pre>{<code>
                {

                    demonstrationsamples[setType()]
                }
            </code>}</pre>
        </div>
    )
}

export default DemonstrationComponent;