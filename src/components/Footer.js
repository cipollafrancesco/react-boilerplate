// @flow
import React from 'react'

const Footer = (props) => (
    <footer className="position-absolute fixed-bottom text-center">
        {props.content}
    </footer>
)

export default Footer