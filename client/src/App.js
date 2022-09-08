import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AuthenticatedApp from './AuthenticatedApp'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
// import {useEffect, useState} from 'react'
import UnauthenticatedApp from './UnauthenticatedApp'

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)
  useEffect(() => {
      fetch("/me", {
        credentials: 'include'
      })
        .then(res => {
          if (res.ok) {
            
            res.json().then((user) => {
              setCurrentUser(user)
              setAuthChecked(true)
            })
          } else {
            setAuthChecked(true)
          }
        })
    }, [])
  console.log(currentUser)

  return (
    <div className="App">
      <BrowserRouter>
      <Image/>
      {currentUser ? 
      <AuthenticatedApp setCurrentUser={setCurrentUser} currentUser={currentUser}/> :
      <UnauthenticatedApp setCurrentUser={setCurrentUser} />
}</BrowserRouter>
    </div>
  );
}

export default App;

const Image = styled.img.attrs(() => ({
  src:"https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80"
}))` position: fixed; 
top: 0; 
left: 0; 
min-width: 100%;
min-height: 100%;
z-index: -1`
