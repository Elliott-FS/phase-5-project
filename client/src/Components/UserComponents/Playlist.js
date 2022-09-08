import styled from 'styled-components'
import {useState, useEffect} from 'react'

function Playlist({currentUser}){
   
    const [playlistName, setPlaylistName] = useState("")
    const [userPlaylists, setUserPlaylists] = useState([])

    useEffect(() => {
        fetch("/playlists")
        .then(res => res.json())
        .then(data => setUserPlaylists(data))
      },[])

      console.log(userPlaylists)

    const handlePlaylistSubmit = ((e) => {
        e.preventDefault()
        let newPlaylist = {
           name:e.target.name.value,
           user_id: currentUser.id,
        }
        fetch("/playlists",{
           method:"POST",
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify(newPlaylist)
       })
     })
    
    
    return (
        <div>
            <div>{userPlaylists.map((eachList) => {
                return (
                    <div>
                        <h2>{eachList.name}</h2>
                        <h4>{eachList.id}</h4>
                        <h3>{eachList.ul_games.map((eachGame) => {
                            return (<div>
                               <h3>{eachGame.name}</h3>
                               <h5>{eachGame.console}</h5>
                            </div>)
                        })}</h3>
                    </div>
                )
            })}</div>

            <FormStyle>
             <form className="playlist-form" onSubmit={handlePlaylistSubmit}>
                <input
                className="name" 
                name="name"
                placeholder="name"
                onChange={(e) => {setPlaylistName(e.target.value)}}
                value={playlistName}></input>
               <button type="submit">Add Playlist</button>
             </form>
             </FormStyle>
        </div>
    )
}

export default Playlist

const FormStyle = styled.div`
form{
    display: flex;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    width: 75%;
    margin: 60px;
    position: fixed;
    bottom: -25px
}
`