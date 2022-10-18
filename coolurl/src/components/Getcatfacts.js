import { useEffect, useState } from "react"



export default function Getcatfacts() {
  let [fact, setFact] = useState('')

    const getFact = async () => {
        try{
            const response = await fetch(
                'https://api.thecatapi.com/v1/images/search'
            );
            const data = await response.json()
            console.log(data[0].url)
            
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
            <h1> Kitties! Kitties! Kitties!</h1>
            <button onClick={handleClick}>Get New Cat</button>
                  
            <br/>
            <img src={fact[0].url} height='500' width='500' alt='no picture available'></img>
            <br/>
            
            
        </div>
    )
}