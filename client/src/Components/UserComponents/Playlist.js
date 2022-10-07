import styled from 'styled-components'
import {useState, useEffect} from 'react'
import PlaylistDetail from './PlaylistDetail'
import {useNavigate} from 'react-router-dom'

function Playlist({currentUser}){
    const navigate = useNavigate()
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
       }).then(navigate("/games"))
       
     })
    
    
    return (
        <div>
            <FormStyle>
            <div className='playlist-section'>{userPlaylists.map((eachList) => {
                return (
                   <PlaylistDetail key={eachList.id} eachList={eachList}/>
                )
            })}</div>
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
    // position: fixed;
    // bottom: -25px
}
.playlist-section{
    display: grid;
    grid-template-columns: 50% 50%;
}
`