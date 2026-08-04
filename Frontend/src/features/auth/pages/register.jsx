import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../auth.form.scss'
import '../../../style/button.scss'
import { useAuth } from '../hooks/useAuth'

const Register = () => {
    const navigate = useNavigate()
    const { loading, handleRegister } = useAuth()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({ username, email, password })
        navigate('/')
    }

    if (loading) {
        return (
            <main className='auth-page' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%' }}>
                <div className='form-container loading'>
                    <div className='loading-spinner' />
                    <h2>Creating your account…</h2>
                </div>
            </main>
        )
    }

    return (
        <main className='auth-page' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%' }}>
            <div className='form-container'>

                <div className='form-brand'>
                    <span className='form-brand__dot' />
                    <span className='form-brand__name'>YuktiHire</span>
                </div>

                <div className='form-header'>
                    <h1>Create account</h1>
                    <p>Start your interview preparation journey.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <label htmlFor='username'>Username</label>
                        <input
                            id='username'
                            name='username'
                            type='text'
                            placeholder='Choose a username'
                            autoComplete='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            id='email'
                            name='email'
                            type='email'
                            placeholder='you@example.com'
                            autoComplete='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            placeholder='Create a strong password'
                            autoComplete='new-password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type='submit' className='button primary-button' disabled={loading}>
                        {loading ? 'Creating account…' : 'Create Account'}
                    </button>
                </form>

                <p className='auth-footer'>
                    Already have an account? <Link to='/login'>Sign in</Link>
                </p>
            </div>
        </main>
    )
}

export default Register
