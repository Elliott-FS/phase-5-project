import styled from 'styled-components'

function PlaylistDetail({eachList}){
    return (
        <PlaylistStyle>
        <div className='playlist-section'>
        <h2>{eachList.name}</h2>
        <h4>{eachList.id}</h4>
        <h3>{eachList.ul_games.map((eachGame) => {
            return (<div>
               <h3>{eachGame.name}</h3>
               <h5>{eachGame.console}</h5>
            </div>)
        })}</h3>
      </div>
      </PlaylistStyle>
    )
}

export default PlaylistDetail

const PlaylistStyle = styled.div`
.playlist-section{
display: inline-grid;
flex-direction: row;
background-color: rgba(223, 223, 240, 0.6);
padding: 30px;
width: 60%;
margin-left: 15px;
margin-top:15px;
font-style: italic
}
`