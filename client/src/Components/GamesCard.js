import styled from 'styled-components';

function GamesCard({eachGameObj, currentUser}) {
// console.log(eachGameObj)


const handlePost = ((e) => {
    let newUrGame = {
        name: eachGameObj.name,
        console: eachGameObj.console,
        image_url: eachGameObj.image_url,
        user_id: currentUser.id,
        game_id: eachGameObj.id,
     }
     fetch("/ur_games",{
        method:"POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(newUrGame)
    })
})



return (
    <div className="games-card-area">
        <GamesContent>
        <div className='games-card'>
        <h4>{eachGameObj.name}</h4>
        <h7>{eachGameObj.console}</h7>
        <img src={eachGameObj.image_url} alt="Loading Games"/>
        <button onClick={handlePost} >Collect</button>
        </div>
        </GamesContent>
    </div>
)
}

export default GamesCard

const GamesContent = styled.div`
img{
    max-width:75px;
    max-height:75px;
    justify-self: center;
 }

 .games-card{
  text-align: center;
  border: grey solid 1px;
  padding: 1rem;
  width: 8rem;
  height: 13rem;
  display: inline-grid;
  margin: 1rem 2rem;
  box-shadow: 3px 4px grey;
  background-color: whitesmoke;
 }
`