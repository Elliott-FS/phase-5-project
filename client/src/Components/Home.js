import styled from 'styled-components'
// import {SiAboutdotme} from "react-icons/si"
// import {useState} from 'react'

function Home(){
    // state and data-flow for signup/login/logout 
    // const [signupName, setSignupName] = useState("")
    // const [signupPass, setSignupPass] = useState("")
    // const[signupPic, setSignupPic] = useState("")
    
    // const [loginName, setLoginName] = useState("")
    // const [loginPass, setLoginPass] = useState("")
    
    // const handleLoginSubmit = ((e) =>{
    //     e.preventDefault()
    
    //     let login = {
    //      username: loginName,
    //      password: loginPass
    //     }
    //     handleLogin(login)
    //     } 
    // ) 
    
    // const handleSignupSubmit = ((e) => {
    //     e.preventDefault()
        
    //     let signup = {
    //         username: signupName ,
    //         password: signupPass,
    //         image_url: signupPic
    //     }
    // handleSignUp(signup)
    
    // })
    
    return(
    <div className="home-page">
        <header>
            <HomeBanner>
            <img src="https://i.pinimg.com/originals/9b/b6/a7/9bb6a7614a85d8585f1c4cfb246bc528.jpg" alt='home-banner' />
            <h1>Welcome</h1>
            <h3>Profile: See your games collection and create playlists.</h3>
            <h3>AdminForms: Admins can update the website from this page. </h3>
            </HomeBanner>
        </header>
        {/* <HomeStyle>
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
            <button onClick={handleLogout}>Logout <SiAboutdotme/></button>
            </div>
        </HomeStyle> */}

    </div>
)
}

export default Home

const HomeBanner = styled.div`
img{
    width: 100%;
    max-height: 100px;
    position: fixed;
    z-index: -1
}

h1, h3{
    color: whitesmoke;
    display: center;
}

`
// const HomeStyle = styled.div`
// .container{
// display: flex;
// justify-content: center;
// font-family: 'Montserrat', sans-serif;
// width: 75%;
// margin: 60px;
// position: fixed;
// bottom: -30px
// }

// `
