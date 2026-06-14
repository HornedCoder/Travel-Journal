import data from 'C:/ReactProjects/travel-journal/src/data.js'
import Entry from './Entry'
export default function Body(){
    const entryElements = data.map((entry) =>{
        return(
            <Entry
            //Props to be filled here. 
            key = {entry.id}
            img = {entry.img}
            title = {entry.title}
            country = {entry.country}
            googleMapsLink = {entry.googleMapsLink}
            dates = {entry.dates}
            text = {entry.text}
            />
        )
    })
    return(
        <>
            {entryElements}
        </>
    )
}