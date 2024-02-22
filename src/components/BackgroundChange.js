import imageFelicia from './felicia.jpg'
export default function BackgroundChange(){
    const changeBackgroundColor = ()=>{
        const myColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
        document.body.style.backgroundColor = myColor;
    }

    const clickHandler = () =>{
        changeBackgroundColor();
    }
    return (
        <div>
            <img id = "profile-image" src = {imageFelicia} alt ="Felicia" onClick = {clickHandler}/>
        </div>
    );
}