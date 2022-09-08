import styled from 'styled-components'
import {useEffect, useState} from 'react'
import UrGames from './UserComponents/UrGames'
import Playlist from './UserComponents/Playlist'





function Profile({currentUser}){
return (
    <div className='profile-page'>
       <ProfileStyle>
       <div className="profile">
       <h2>{currentUser.username}</h2>
       <img src={currentUser.image_url} alt="profile pic"/>
       </div>
       </ProfileStyle>
       <UrGames currentUser={currentUser} />
       <Playlist currentUser={currentUser} />
    </div>
)
}

export default Profile

const ProfileStyle = styled.div`
img{
    display: flex;
    margin-top:;
    max-height: 125px;
    max-width: 125px
}
`