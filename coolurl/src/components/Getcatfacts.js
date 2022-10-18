import { useEffect, useState } from "react"



export default function Getcatfacts() {
  let [fact, setFact] = useState('')

    const getFact = async () => {
        try{
            const response = await fetch(
                'https://api.thecatapi.com/v1/images/search'
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
            <h1> Kitties! Kitties! Kitties!</h1>
                  
            <br/>
            <img src={fact.image_link} height='500' width='500' alt='no picture available'></img>
            <br/>
            <p>id: {fact.id}</p>
            <p>url: {fact.url}</p>
            <p>width: {fact.width}</p>
            <p>height: {fact.height}</p>
        </div>
    )
}