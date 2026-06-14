import Marker from "C:/ReactProjects/travel-journal/src/assets/Marker.png"

export default function Entry(props){
    return(
        <div id="Entry-component">
            <div id="Photo">
                <img src= {props.img.src} alt={props.img.alt}></img>
            </div>
            <div id="Info">
                <div id="Location">
                    <img src={Marker}></img>
                    <p> Japan </p>
                    <a href={props.googleMapsLink}> View on Google Maps</a>
                </div>
                <div id="Title">
                    <h1>{props.title}</h1>
                </div>
                <div id="Date">
                    <h5>{props.dates}</h5>
                </div>
                <div id="Text">
                    <p>{props.text}</p>
                </div>
            </div>
            
        </div>
    )
}