import { useEffect, useState } from "react"

export default function Getzooanimalfact() {
   
    let [fact, setFact] = useState('')

    const getFact = async () => {
        try{
            const response = await fetch(
                'https://zoo-animal-api.herokuapp.com/animals/rand'
            );
            const data = await response.json()
            console.log(data)
            setFact(data)
        }
        catch (err){
            console.error(err)
        }
    }
    const handleClick = () => {
        getFact()
    }
    useEffect(() => {
        getFact()
    },[])
    return(
        <div>
            <h1> Random Zoo animal Facts!</h1>
            <h2> Click the button to learn about a random zoo animal!</h2>
            <button onClick={handleClick}>Get New Facts</button>
            <br/>
            <img src={fact.image_link} height='500' width='500' alt='no picture available'></img>
            <br/>
            <p>Name: {fact.name}</p>
            <p>Latin Name: {fact.latin_name}</p>
            <p>Animal Type: {fact.animal_type}</p>
            <p>Active Time: {fact.active_time}</p>
            <p>Min Length: {fact.length_min}</p>
            <p>Max Length: {fact.length_max}</p>
            <p>Min Weight: {fact.weight_min}</p>
            <p>Max Weight: {fact.weight_max}</p>
            <p>Lifespan: {fact.lifespan}</p>
            <p>Diet: {fact.diet}</p>
            <p>Geo-range: {fact.geo_range}</p>
            
        </div>
    )
}