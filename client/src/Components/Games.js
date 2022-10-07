import styled from 'styled-components'
import GamesCard from "./GamesCard"


function Games({arrayOfGames, currentUser, sendUpSearch}){
    return (
        <CardContainer>
        <div className="search">
        <input type="text" className="search-bar"
        onChange ={(e) => sendUpSearch( e.target.value)} />
        </div>
        <div className='games-index'>
            {arrayOfGames.map((eachGameObj) => {
                return <GamesCard key={eachGameObj.id} eachGameObj={eachGameObj} currentUser={currentUser} />
            })}
        </div>
        </CardContainer>
    )
}
export default Games 

const CardContainer = styled.div`
.games-index{
  display: grid;
  grid-template-columns: 25% 25% 25% 25% 25%;
}
.search{
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 40%;
}
`