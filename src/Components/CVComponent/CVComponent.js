import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


import './CVComponent.css';

const list = ['Trabajo en equipo', 'Exigencia en el ámbito laboral', 'Conocimientos en:', 'Implicacion en los proyectos asignados', 'Predisposición al aprendizaje a los nuevos conocimientos'];
const knowledgementList = ['React', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'Python', 'Node.js', 'Docker', 'Swagger', 'MongoDB', 'SQL', 'C++(algoritmia)', 'Electron', 'Angular', 'Kubernetes'];

function CVComponent(props) {
    const [know, setKnow] = useState('none');
    const history = useHistory();
    props.childKnowldg(know)
    console.log(history);

    function knowbuttn(knwl) {
        setKnow(knwl);
        history.push(`/Demonstration/${knwl}`);
    }
    function listFunc() {
        return (
            <ul>
                {
                    list.map(function (itemlist) {
                        if (itemlist === 'Conocimientos en:') {
                            return (
                                <div>
                                    <li>{itemlist}</li>
                                    <div className="knowDiv">
                                        {
                                            knowledgementList.map(function (knowElement) {
                                                if (knowElement === 'React') {
                                                    return (
                                                        <button type="button" onClick={() => knowbuttn(knowElement)} className="buttonStyle btn-second" data-toggle="tooltip" data-placement="top" title="Working on React env">{knowElement}</button>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <button onClick={() => knowbuttn(knowElement)} className="buttonStyle">{knowElement}</button>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <li>{itemlist}</li>
                        )
                    })
                }
            </ul>
        )
    }
    
    function htmlLang(lang) {
        if (lang === "ENG") {
            return (
                <div>
    
                    <div className="MainDiv">
                        <div className="blockIMG">
                            <p className="NameDiv">Iñigo Moreno Ramos</p>
                            <div className="imageCV"></div>
                        </div>
                        <h4>Objetivo Principal</h4><br />
                        <p>
                            To take part from a bussiness where i could expertise on all of my knowledgement, that brings to me
                            the oportunitiy to reach my goals and also offers me growth on work, personal and intellectual environment.
                        </p>
                        <h4>Experiencia Laboral</h4><br />
                        <p>July 2015-april 2018 Barman • Cafeteria Queralt</p>
                        <p>June 2018 – november 2019 • Personal support to development UX • Universitat Pompeu Fabra </p>
                        <p style={{ marginLeft: '5px', textAlign: 'justify' }}>
                            Development of Client-Side solutions in order to make the medical images automatically processed,
                            interacting with the Orthanc PACS DICOM API-REST and the data structure of Kubernetes.
                        </p>
                        <h4>Formación</h4><br />
                        <p>Bachillerato, Igualada, Barcelona | 2012 - 2014</p>
                        <p>Ingeniería informática – Universitat politécnica de Catalunya | 2017 - 2019</p>
                        <p>Ingeniería informática – Universitat Oberta de Catalunya | 2020 – actualmente</p>
                        <h4>Aptitudes</h4>
                        {listFunc()}
                        <h4>Logros</h4><br />
                        <p>
                            I've been working in a project of Universitat Pompeu Fabre, developing Front-End and part of Back-End to the
                            process module of medical images. My development had been centered on the interconection about PACS of DICOM
                            and the Cluster based on Kubernetes owned by the University
                        </p>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="MainDiv">
                        <div className="blockIMG">
                            <p className="NameDiv">Iñigo Moreno Ramos</p>
                            <div className="imageCV"></div>
                        </div>
                        <h4>Objetivo Principal</h4><br />
                        <p>
                            Formar parte de una empresa en la que pueda poner en practica todos mis conocimientos, que me brinde la
                            oportunidad de alcanzar todas mis metas, y me ofrezca la oportunidad de crecer en el área laboral, personal e
                            intelectual.
                        </p>
                        <h4>Experiencia Laboral</h4><br />
                        <p>Julio 2015-abril 2018 Camarero • Cafeteria Queralt</p>
                        <p>Junio 2018 – noviembre 2019 • Personal de soporte a la investigacion• UX • Universitat Pompeu Fabra</p>
                        <p style={{ marginLeft: '5px', textAlign: 'justify' }}>
                            Desarrollo de soluciones mayormente en client-side para la automatización del proceso de imágenes médicas,
                            interactuando con la API-REST de Orthanc PACS DICOM y la estructura de datos de Kubernetes
                        </p>
                        <h4>Formación</h4><br />
                        <p>Bachillerato, Igualada, Barcelona | 2012 - 2014</p>
                        <p>Ingeniería informática – Universitat politécnica de Catalunya | 2017 - 2019</p>
                        <p>Ingeniería informática – Universitat Oberta de Catalunya | 2020 – actualmente</p>
                        <h4>Aptitudes</h4>
                        {listFunc()}
                        <h4>Logros</h4><br />
                        <p>
                            He trabajado en un proyecto de la Universidad Pompeu Fabra, desarrollando el Front-end y parte del back-end para
                            el módulo de proceso de las imágenes médicas. Mi desarrollo ha estado centrado en la interconexión de los PACS de
                            DICOM y el Clúster basado en Kubernetes de la Universidad.
                        </p>
                    </div>
                </div>
            )
        }
    }
    return (
        htmlLang(props.language)
    )
}

export default CVComponent;