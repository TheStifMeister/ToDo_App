/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
            backgroundColor: '#1f2937',
            paddingLeft: '15px',
            paddingRight: '15px'
        }}>
            <Navbar.Heading
                style={{ color: '#fff', position: 'relative', marginTop: '-2px' }}>
                <Link to="/">
                    <Button minimal text='TodoApp' style={{ color: '#fff' }}/>
                </Link>
            </Navbar.Heading>
            <div className='flex justify-end space-x-4 p-4' >
                <Link to="/login">
                    <Button minimal intent='primary' text='Login' style={{ color: '#fff' }}/>
                </Link>
                <Link to="/register">
                    <Button minimal intent='primary' text='Register' style={{ color: '#fff' }} />
                </Link>
            </div>
                        
        </Navbar>
    )
}

export default navbarHeader