import React, { useState, useContext } from 'react'
import { Button, FormGroup, InputGroup, Card } from '@blueprintjs/core'
import { AuthContext } from './AuthContext'

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { register } = useContext(AuthContext)

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value)

    const handleRegister = () => {
        register(email, password)
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <Card style={{ borderWidth: '1px', display: 'inline-block', width: 'auto', height: 'auto', borderRadius: '15px', backgroundColor: '#fff', marginRight: '10px', marginBottom: '10px', boxShadow: '2px 5px 5px #333', overflow: 'hidden' }}>
                <h1 style={{ backgroundColor: '#fff', color: '#000', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', padding: '0' }}>Registration</h1>
                <div style={{ margin: '0', border: 'none', background: '#e5e7eb', padding: '20px', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <FormGroup label="Full Name">
                        <InputGroup type="text" placeholder="Enter your full name" />
                    </FormGroup>
                    <FormGroup label="Email">
                        <InputGroup type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
                    </FormGroup>
                    <FormGroup label="Password">
                        <InputGroup type="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" />
                    </FormGroup>
                    <Button intent='success' text="Register" className='mt-4' onClick={handleRegister} />
                </div>
            </Card>
        </div>
    )
}

export default Registration