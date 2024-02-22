import React, {useEffect, useState} from 'react';

const Modal = ({isOpen, onClose, children})=>{
    if(!isOpen) return null;
    return(
        <div class = "modal-container">
            {children}
            <button class = "closeBtn" onClick={onClose}>Stäng</button>
        </div>
    )  
}
export default function ModalPopup(){
    const [isModalOpen, setIsModalOpen] = useState(false);//startvärde som gör att modalen inte visas 
    const [password, setPassword] = useState([])//startvärde är en tom array 

    const openModal = () => setIsModalOpen(true);//funktion som öppnar modal

    const closeModal = () => {//funktion som stänger modal och sätter password till en tom array
        setIsModalOpen(false)
        setPassword([]);
    };

    const handleKeyPress = (event) => {
        const userInput = [...password, event.key]//lägger in tangenttryckningarna i en array
        setPassword(userInput)//sätter in användarens input som värde för password

        const correctPassword = ['1', '9', '9', '4'];//deklarerar korrekt lösenord för att öppna modalen

        if (userInput.join('') === correctPassword.join('')) {
          openModal();
        }
      };

      useEffect(() => {
        
        document.addEventListener('keydown', handleKeyPress);//event som kontrollerar tangentryckningar på sidan

      }, [password]); //tar in argument för att köra useEffect

    return (
        <div>
            <Modal isOpen={isModalOpen} onClose = {closeModal}>
                <div>
                    <h4>År 1994 hände flera historiska händelser</h4>
                    <ul class = "modal-text">
                        <li>Felicia Müller kom till denna jord</li>
                        <li>Sverige tar VM-brons i fotboll</li>
                        <li>Tre Kronor tar OS-guld i Lillehammer</li>
                        <li>Succéfilmerna Forrest Gump, Pulp Fiction och Nyckeln till frihet hade premiär</li>
                    </ul>
                </div>
            </Modal>
        </div>
    );
}