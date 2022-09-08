import styled from 'styled-components'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function AdminForms({sendNewGame}){

    const navigate = useNavigate()
    const [gameName, setGameName] = useState("")
    const [gameConsole, setGameConsole] = useState("")
    const [gameImage, setGameImage] = useState("")


    const handleGameSubmit = ((e) =>{
        e.preventDefault()

        let newGame = {
            name: gameName,
            console: gameConsole,
            image_url: gameImage
        }
        sendNewGame(newGame)
        navigate("/games")
        } 
    ) 


    return (
        <FormStyle>
        <div className='admin-forms'>
            <form onSubmit={handleGameSubmit}>
                <input
                className="game-name" 
                name="game-name"
                placeholder="Game Title"
                onChange={(e) => {setGameName(e.target.value)}}
                value={gameName}></input>
                <input
                className="console" 
                name="console"
                placeholder="Console"
                onChange={(e) => {setGameConsole(e.target.value)}}
                value={gameConsole}></input>
                <input
                 className="image" 
                 name="image"
                 placeholder="Image URL"
                 onChange={(e) => {setGameImage(e.target.value)}}
                 value={gameImage}></input>
            <button type="submit">Add Game</button>
            </form>
        </div>
        </FormStyle>
)
}

export default AdminForms

const FormStyle = styled.div`
form{ 
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 30%;
    flex-wrap: wrap;
    box-shadow: 0px 0px 15px 10px;
    

    button{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align: center;
        width: 20%;
        margin: auto;
        background-color: white;
        margin-bottom: 10px;
        margin-top: 10px;
        
    }
    
    
}

input{
margin: 10px;
}
`