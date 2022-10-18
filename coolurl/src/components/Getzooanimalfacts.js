import { useState } from "react"

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
    return(
        <div>
            <h1> Random Zoo animal Facts!</h1>
            <h2> Click the button to learn about a random zoo animal!</h2>
            <button onClick={handleClick}>Get Facts</button>
            <p>Name:{fact.name}</p>
            <p>Latin Name:{fact.latin_name}</p>
        </div>
    )
}