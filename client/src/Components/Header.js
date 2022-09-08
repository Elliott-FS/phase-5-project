import styled from 'styled-components'
import {Link} from "react-router-dom"
import {SiAboutdotme} from "react-icons/si"
// import {useState} from "react"


function Header({handleLogout}) {


return (
    <div className="Nav">
        <HeaderContent>
        <button className='home-button'>
        <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
        </button>
        <button>
        <Link to="/games" style={{textDecoration: 'none'}}>Games</Link>
        </button>
        <button>
        <Link to="/profile" style={{textDecoration: 'none'}}>Profile</Link>
        </button>
        <button>
        <Link to="/adminforms" style={{textDecoration: 'none'}}>Admin Forms</Link>
        </button>
        </HeaderContent>
        <button onClick={handleLogout}>Logout <SiAboutdotme/></button>
    </div>
)
}

export default Header

const HeaderContent = styled.div`
margin-bottom: 20px;
img{
    display: flex;
    margin-top:;
    max-height: 75px;
    max-width: 75px
 };
`