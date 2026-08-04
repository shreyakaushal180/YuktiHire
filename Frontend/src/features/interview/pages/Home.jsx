import React, { useState, useRef } from 'react'
import '../style/home.scss'
import '../../../style/button.scss'
import { useInterview } from '../hooks/useInterview.js'
import { useNavigate } from 'react-router-dom'

const MAX_JD_CHARS = 5000

const Home = () => {
    const { loading, generateReport, reports } = useInterview()
    const [jobDescription, setJobDescription] = useState('')
    const [selfDescription, setSelfDescription] = useState('')
    const [fileName, setFileName] = useState(null)
    const [error, setError] = useState(null)
    const resumeInputRef = useRef()
    const navigate = useNavigate()

    const handleGenerateReport = async () => {
        const resumeFile = resumeInputRef.current?.files?.[0]

        if (!jobDescription.trim()) {
            setError('Job description is required to generate your interview plan.')
            return
        }

        if (!resumeFile && !selfDescription.trim()) {
            setError('Please upload a resume or add a self-description before generating.')
            return
        }

        setError(null)

        const data = await generateReport({ jobDescription, selfDescription, resumeFile })

        if (!data || !data._id) {
            setError('Unable to generate the interview strategy right now. Please try again later.')
            return
        }

        navigate(`/interview/${data._id}`)
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setFileName(file ? file.name : null)
    }

    const jdLen = jobDescription.length
    const charWarn = jdLen > MAX_JD_CHARS * 0.85

    if (loading) {
        return (
            <main className='loading-screen'>
                <div className='loading-spinner' />
                <p>Generating your interview strategy…</p>
            </main>
        )
    }

    return (
        <div className='home-page'>

            {/* Navbar */}
            <nav className='home-nav'>
                <span className='home-nav__brand'>
                    <span className='home-nav__brand-dot' />
                    <span className='home-nav__brand-name'>YuktiHire</span>
                </span>
            </nav>

            {/* Page Header */}
            <header className='page-header'>
                <h1>Create Your Custom <span className='highlight'>Interview Plan</span></h1>
                <p>Let our AI analyze the job requirements and your unique profile to build a winning strategy.</p>
            </header>

            {/* Main Card */}
            <div className='interview-card'>
                <div className='interview-card__body'>

                    {/* Left Panel — Job Description */}
                    <div className='panel panel--left'>
                        <div className='panel__header'>
                            <span className='panel__icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                            </span>
                            <h2>Target Job Description</h2>
                            <span className='badge badge--required'>Required</span>
                        </div>
                        <textarea
                            onChange={(e) => setJobDescription(e.target.value)}
                            value={jobDescription}
                            className='panel__textarea'
                            placeholder={`Paste the full job description here…\ne.g. "Senior Frontend Engineer at Acme requires React, TypeScript, and system design experience…"`}
                            maxLength={MAX_JD_CHARS}
                        />
                        <div className={`char-counter${charWarn ? ' char-counter--warn' : ''}`}>
                            {jdLen.toLocaleString()} / {MAX_JD_CHARS.toLocaleString()}
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className='panel-divider' />

                    {/* Right Panel — Profile */}
                    <div className='panel panel--right'>
                        <div className='panel__header'>
                            <span className='panel__icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </span>
                            <h2>Your Profile</h2>
                        </div>

                        {/* Resume Upload */}
                        <div className='upload-section'>
                            <label className='section-label'>
                                Upload Resume
                                <span className='badge badge--best'>Best Results</span>
                            </label>
                            <label className={`dropzone${fileName ? ' has-file' : ''}`} htmlFor='resume'>
                                <span className='dropzone__icon'>
                                    {fileName ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" /><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" /></svg>
                                    )}
                                </span>
                                <p className='dropzone__title'>
                                    {fileName ? fileName : 'Click to upload or drag & drop'}
                                </p>
                                <p className='dropzone__subtitle'>PDF or DOCX · Max 5 MB</p>
                                <input
                                    ref={resumeInputRef}
                                    hidden
                                    type='file'
                                    id='resume'
                                    name='resume'
                                    accept='.pdf,.docx'
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>

                        {/* OR Divider */}
                        <div className='or-divider'><span>or</span></div>

                        {/* Quick Self-Description */}
                        <div className='self-description'>
                            <label className='section-label' htmlFor='selfDescription'>
                                Quick Self-Description
                            </label>
                            <textarea
                                onChange={(e) => setSelfDescription(e.target.value)}
                                id='selfDescription'
                                name='selfDescription'
                                className='panel__textarea panel__textarea--short'
                                placeholder="Briefly describe your experience and key skills if you don't have a resume handy…"
                            />
                        </div>

                        {/* Info Box */}
                        <div className='info-box'>
                            <span className='info-box__icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" stroke="#082032" strokeWidth="2" /><line x1="12" y1="16" x2="12.01" y2="16" stroke="#082032" strokeWidth="2" /></svg>
                            </span>
                            <p>Either a <strong>Resume</strong> or a <strong>Self-Description</strong> is required to generate a personalised plan.</p>
                        </div>
                    </div>
                </div>

                {/* Card Footer */}
                <div className='interview-card__footer'>
                    <span className='footer-info'>AI-Powered · ~30 seconds</span>
                    {error && <div className='error-message'>{error}</div>}
                    <button
                        onClick={handleGenerateReport}
                        className='generate-btn'
                        disabled={!jobDescription.trim()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>
                        Generate My Interview Strategy
                    </button>
                </div>
            </div>

            {/* Recent Reports */}
            {reports && reports.length > 0 && (
                <section className='recent-reports'>
                    <h2>Recent Interview Plans</h2>
                    <ul className='reports-list'>
                        {reports.map(report => (
                            <li
                                key={report._id}
                                className='report-item'
                                onClick={() => navigate(`/interview/${report._id}`)}
                            >
                                <h3>{report.title || 'Untitled Position'}</h3>
                                <span className='report-meta'>
                                    {new Date(report.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                </span>
                                <span className={`match-score ${report.matchScore >= 80 ? 'score--high' : report.matchScore >= 60 ? 'score--mid' : 'score--low'}`}>
                                    {report.matchScore}% match
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Page Footer */}
            <footer className='page-footer'>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Terms of Service</a>
                <a href='#'>Help Center</a>
            </footer>
        </div>
    )
}

export default Home
