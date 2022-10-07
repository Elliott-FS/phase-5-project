import styled from 'styled-components'
import {useState} from 'react'
import UrGamesCard from './UrGamesCard'
import {useNavigate} from 'react-router-dom'

function UrGames({currentUser}){
    
const [playlistName, setPlaylistName] = useState("")
const navigate = useNavigate()

   const [ulGameName, setUlGameName] = useState("")
   const [urGameId, setUrGameId] = useState("")
   const [ulGameConsole, setUlGameConsole] = useState("")
   const [playlistId, setPlaylistId] = useState("")

 const handleGameToPlaylist = ((e) => {
    e.preventDefault()
    let playlistGame = {
       name: ulGameName,
       console: ulGameConsole ,
       ur_game_id: urGameId ,
       playlist_id: playlistId
    }
    console.log(playlistGame)
    fetch("/ul_games",{
       method:"POST",
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify(playlistGame)
 }).then(navigate("/games"))
})
 
    return (
        <CardContainer>
        <div className="ur-games-index">
        {currentUser.ur_games.map((eachUrGame) => {
        return <UrGamesCard key={eachUrGame.id} eachUrGame={eachUrGame} currentUser={currentUser} />
        }
        )}
        <FormStyle>
        <form onSubmit={handleGameToPlaylist} className="list-game-form">
        <select name="name"
        onChange={(e) => {setUlGameName(e.target.value)}}
        value={ulGameName}>
        {currentUser.ur_games.map((eachGameObj) => {
        return (
        <option>{eachGameObj.name}</option>
               )
            })}
        </select>
        <select name="game-id"
         onChange={(e) => {setUrGameId(e.target.value)}}
         value={urGameId}>
            {currentUser.ur_games.map((eachGameObj) => {
               return (
                  <option>{eachGameObj.id}</option>
               )
            })}
         </select>
         <select name="console"
         onChange={(e) => {setUlGameConsole(e.target.value)}}
         value={ulGameConsole}>
            {currentUser.ur_games.map((eachGameObj) => {
               return (
                  <option>{eachGameObj.console}</option>
               )
            })}
         </select>
         <select name="playlist-id"
         onChange={(e) => {setPlaylistId(e.target.value)}}
         value={playlistId}>
            {currentUser.playlists.map((eachPlaylist) => {
               return (
                  <option>{eachPlaylist.id}</option>
               )
            })}
         </select>
         <button type="submit">Add to Playist</button>
      </form>
      </FormStyle>
    </div>
    </CardContainer>
   )
}
    
export default UrGames

const CardContainer = styled.div`
.ur-games-index{
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
}
`
const FormStyle = styled.div`
form{
    display: flex;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    width: 75%;
    margin: 60px;
    position: fixed;
    bottom: -50px
}
`