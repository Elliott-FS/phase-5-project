import styled from 'styled-components'
import {useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import AdminForms from "./Components/AdminForms"
import Games from "./Components/Games"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Profile from "./Components/Profile"


function AuthenticatedApp ({currentUser, setCurrentUser}){
    // navigation
    // const navigate = useNavigate()
    // user fetch
    // const [currentUser, setCurrentUser] = useState(null)
    // const [authChecked, setAuthChecked] = useState(false)
    // useEffect(() => {
    //     fetch("/me", {
    //       credentials: 'include'
    //     })
    //       .then(res => {
    //         if (res.ok) {
              
    //           res.json().then((user) => {
    //             setCurrentUser(user)
    //             setAuthChecked(true)
    //           })
    //         } else {
    //           setAuthChecked(true)
    //         }
    //       })
    //   }, [])
    // console.log(currentUser)

    // Games Fetch
const [gamesData, setGamesData] = useState([])
useEffect(() => {
    fetch("/games")
    .then(res => res.json())
    .then(data => setGamesData(data))
  },[])

//   login/logout/signup functions
  // const handleLogin = (login) => {
  //   fetch("/login", {
  //   method:"POST",
  //   headers: {'Content-Type':'application/json'},
  //   body: JSON.stringify(login)
  //   }).then(res => {
  //     if (res.ok) {
  //       res.json().then(user => {
  //         setCurrentUser(user)
  //         navigate("/profile")
  //       })
  //     } else {
  //       res.json().then(errors => {
  //         console.error(errors)
  //       })
  //     }
  //   })
  //   }


  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          //  navigate("/adminforms")
        }
      })
  }

  // const handleSignUp = (newSignUp) => {
  //   console.log(newSignUp)
  //   fetch("/signup", {
  //     method:"POST",
  //     headers: {'Content-Type':'application/json'},
  //     body: JSON.stringify(newSignUp)
  //     }).then(res => {
  //       if (res.ok) {
  //         res.json().then(user => {
  //           setCurrentUser(user)
  //           navigate("/profile")
  //         })
  //       } else {
  //         res.json().then(errors => {
  //           console.error(errors)
  //         })
  //       }
  //     })
  // }

//   Admin Game Forms

function getNewGame(newGameObj){
    // console.log(newGameObj)
    setGamesData([...gamesData, newGameObj])
    fetch("/games",{
        method:"POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(newGameObj)
    })
  }

    return (   
        <div className="Auth-App">
         {/* render components here */}
                <Header handleLogout={handleLogout} />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/games" element={<Games arrayOfGames={gamesData} currentUser={currentUser} />}/>
                    <Route path="/adminforms" element={<AdminForms sendNewGame={getNewGame} />}/>
                    <Route path="profile" element={<Profile currentUser={currentUser} />}/>
                </Routes>
        </div>
        )
}

export default AuthenticatedApp