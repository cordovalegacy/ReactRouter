import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Form = () => {

    const [rickAndMorty, setRickAndMorty] = useState("")
    const navigate = useNavigate()

    return (
        <div>
            <form onSubmit={() => navigate(`/display/${rickAndMorty}`)}>
                <label>
                    Rick and Morty Request:{" "}
                    <input type="text" onChange={(e) => setRickAndMorty(e.target.value)} />
                </label>
                <input type="submit" value="Send" />
                <p>{rickAndMorty}</p>
            </form>
        </div>
    )
}

export default Form
