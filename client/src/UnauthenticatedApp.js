import styled from 'styled-components'
import {useState} from 'react'
import {SiAboutdotme} from "react-icons/si"

function UnauthenticatedApp({setCurrentUser}){



    const [signupName, setSignupName] = useState("")
    const [signupPass, setSignupPass] = useState("")
    const[signupPic, setSignupPic] = useState("")
    
    const [loginName, setLoginName] = useState("")
    const [loginPass, setLoginPass] = useState("")
    
    const handleSignUp = (newSignUp) => {
        console.log(newSignUp)
        fetch("/signup", {
          method:"POST",
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(newSignUp)
          }).then(res => {
            if (res.ok) {
              res.json().then(user => {
                setCurrentUser(user)
              })
            } else {
              res.json().then(errors => {
                console.error(errors)
              })
            }
          })
      }
    
      const handleLogin = (login) => {
        fetch("/login", {
        method:"POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(login)
        }).then(res => {
          if (res.ok) {
            res.json().then(user => {
              setCurrentUser(user)
            })
          } else {
            res.json().then(errors => {
              console.error(errors)
            })
          }
        })
        }  

        const handleLoginSubmit = ((e) =>{
            e.preventDefault()
        
            let login = {
             username: loginName,
             password: loginPass
            }
            handleLogin(login)
            } 
        ) 
        
        const handleSignupSubmit = ((e) => {
            e.preventDefault()
            
            let signup = {
                username: signupName ,
                password: signupPass,
                image_url: signupPic
            }
        handleSignUp(signup)
        
        })



    return (
    <div>
        <header>
        <HomeBanner>
        <img src="https://i.pinimg.com/originals/9b/b6/a7/9bb6a7614a85d8585f1c4cfb246bc528.jpg" alt='home-banner' />
        <h1>Please Sign-up or Login to Continue</h1>
        </HomeBanner>
        </header>
        <HomeStyle>
        <div className='container'>
            <button>Sign-up <SiAboutdotme/></button>
            <form onSubmit={handleSignupSubmit} className='signup-form'>
            <input
            name="username"
            placeholder='username'
            onChange={(e) => {setSignupName(e.target.value)}}
            value={signupName}></input>
            <input
            name='password'
            placeholder='password'
            onChange={(e) => {setSignupPass(e.target.value)}}
            value={signupPass}></input>
             <input
            name='profile-pic'
            placeholder='profile-image-url'
            onChange={(e) => {setSignupPic(e.target.value)}}
            value={signupPic}></input>
            <button>Submit</button>
            </form>
            <button>Login <SiAboutdotme/></button>
            <form onSubmit={handleLoginSubmit} className='login-form'>
            <input
            name="user-login"
            placeholder='user login'
            onChange={(e) => {setLoginName(e.target.value)}}
            value={loginName}></input>
            <input
            name='password'
            placeholder='password'
            onChange={(e) => {setLoginPass(e.target.value)}}
            value={loginPass}></input>
            <button>Submit</button>
            </form>
            </div>
        </HomeStyle>

    </div>
)
}
export default UnauthenticatedApp

const HomeBanner = styled.div`
img{
    width: 100%;
    max-height: 100px;
    position: fixed;
    z-index: -1
}

h1{
    color: whitesmoke;
    display: center;
}
`

const HomeStyle = styled.div`
.container{
display: flex;
justify-content: center;
font-family: 'Montserrat', sans-serif;
width: 75%;
margin: 60px;
position: fixed;
bottom: -30px
}

`