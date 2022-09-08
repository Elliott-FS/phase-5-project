import styled from 'styled-components'
import GamesCard from "./GamesCard"


function Games({arrayOfGames, currentUser}){
    return (
        <CardContainer>
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
`