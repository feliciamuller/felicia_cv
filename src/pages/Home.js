import ModalPopup from "../components/ModalPopup";
import './style.css'

export default function Home(){//en start på hemsidan
    return (
        <div>
            <div className = "home-container">
                <h2>Välkommen till min sida!</h2>
                <section className = "home-content">
                Felicia Müller heter jag och går just nu utbildningen Systemutvecklare .NET med AI-kompetens. Denna sida är en del av min utbildning och kommer byggas på ju 
                mer jag lär mig. På denna sida kan du läsa lite om mig, kika på mitt CV och min portfolio, samt hur du kommer i kontakt med mig!
                </section>
            </div>
            <section>
                <ModalPopup/>
            </section>
        </div>
    );
}