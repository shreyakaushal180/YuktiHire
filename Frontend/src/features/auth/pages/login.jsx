import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../auth.form.scss'
import '../../../style/button.scss'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({ email, password })
        navigate('/')
    }

    if (loading) {
        return (
            <main className='auth-page' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%' }}>
                <div className='form-container loading'>
                    <div className='loading-spinner' />
                    <h2>Signing you in…</h2>
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
                    <h1>Welcome back</h1>
                    <p>Sign in to continue your interview prep.</p>
                </div>

                <form onSubmit={handleSubmit}>
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
                            placeholder='Your password'
                            autoComplete='current-password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type='submit' className='button primary-button' disabled={loading}>
                        {loading ? 'Signing in…' : 'Sign In'}
                    </button>
                </form>

                <p className='auth-footer'>
                    Don't have an account? <Link to='/register'>Create one</Link>
                </p>
            </div>
        </main>
    )
}

export default Login
