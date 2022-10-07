import styled from 'styled-components'

function UrGamesCard({eachUrGame, currentUser}){
    return (
        <UrGamesContent>
        <div className='urgames-card'>
            <div>
            <p1>{eachUrGame.id}</p1>
            <h4>{eachUrGame.name}</h4>
            <h5>{eachUrGame.console}</h5>
            <img src={eachUrGame.image_url} alt="Loading Games"/>
            </div>
        </div>
        </UrGamesContent>
    )
}

export default UrGamesCard

const UrGamesContent = styled.div`
img{
    max-width:75px;
    max-height:75px;
    justify-self: center;
 }

 .urgames-card{
  text-align: center;
  border: grey solid 1px;
  padding: 1rem;
  width: 8rem;
  height: 13rem;
  display: inline-grid;
  margin: 1rem 2rem;
  box-shadow: 3px 4px black;
  background: linear-gradient(white, #87CEEB);
  border-radius: 10px;
  font-family: "Times New Roman", Times, serif;
 }

 .urgames-card:hover{
    text-align: center;
    border: grey solid 1px;
    padding: 1rem;
    width: 8rem;
    height: 13rem;
    display: inline-grid;
    margin: 1rem 2rem;
    box-shadow: 3px 4px white;
    background: linear-gradient(white, #87CEEB);
    transform: scale(1.3);
 }
`