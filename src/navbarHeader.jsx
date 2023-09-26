/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Button, Navbar } from "@blueprintjs/core"
import "@blueprintjs/core/lib/css/blueprint.css"

const navbarHeader = () => {

    return (
        <Navbar style={{
            borderBottom: '0 solid #e5e7eb',
            height: '50px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#222034',
            paddingLeft: '15px',
            paddingRight: '15px'
        }}>
            <Button icon="menu" className='bp5-minimal' style={{ marginRight: '10px', color: '#fff' }} />
            <Navbar.Heading
                style={{ color: '#fff', position: 'relative', marginTop: '-2px' }}>
                TODO App
            </Navbar.Heading>            
        </Navbar>
    );
}

export default navbarHeader