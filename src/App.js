import React from 'react'
import './styles/App.css'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'


const App = (props) => {
    return (
        <div className="container-fluid p-0">

            {/* HEADER */}
            <Header title="React Test Project"/>

            {/* BODY */}
            <Body className="row"/>

            {/* FOOTER */}
            <Footer content="Made by Onion"/>

        </div>
    )
}

export default App
