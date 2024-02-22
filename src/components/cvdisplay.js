import React from 'react';
import cvData from '../cv.json';
import './cv.css'

const CvDisplay = ()=>{

    return(
        <div className = "cv-container">
            <section className = "cv-section">
                <h1>Mina anställningar</h1>
                    {cvData.anställningar.map((anställning)=>(
                    <ul key = {anställning.id}>
                        <h3>{anställning.arbetsplats}</h3>
                        <li>{anställning.positioner[0]}</li>
                        <li>{anställning.positioner[1]}</li>
                        <li>{anställning.positioner[2]}</li>
                        <li>{anställning.positioner[3]}</li>
                    </ul>
                ))}
            </section>
            <section className = "cv-section">
                <h1>Utbildningar</h1>
                {cvData.utbildningar.map((utbildning) => (
                    <ul key = {utbildning.id}>
                        <h3>{utbildning.skola}</h3>
                        <li>{utbildning.utbilding}</li>
                    </ul>
                ))}
            </section>
            <section className = "cv-section">
                <h1>Övriga meriter</h1>
                {cvData.övrigt.map((övrig) => (
                    <ul key = {övrig.id}>
                        <li>{övrig.merit}</li>
                    </ul>
                ))}
            </section>
        </div>
    );
};
export default CvDisplay;