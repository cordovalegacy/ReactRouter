import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'

const Display = () => {

    const { name } = useParams()
    const [character, setCharacter] = useState([])

    useEffect(() => {
        axios
        .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then((res) => {
            console.log("data", res.data.results)
            setCharacter(res.data.results)
        })
        .catch((err) => {
            console.log("errors", err)
        })
    }, [])

    return (
        <div>
            {character.map((item, idx) => (
                <img key={idx} src={item.image}/>
            ))}
        </div>
    )
}

export default Display
