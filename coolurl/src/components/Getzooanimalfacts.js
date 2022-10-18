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
    return(
        <div>
            <h1> Random Zoo animal Facts!</h1>
            <h2> Click the button to learn about a random zoo animal!</h2>
            <p>{fact.name}</p>
        </div>
    )
}