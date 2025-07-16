import React from 'react'

export const hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Organize Your Personal Library with BookVault</h1>
                        <p>Track, manage, and discover books in your personal collection. BookVault helps avid readers keep their libraries organized and accessible from anywhere.</p>
                        <div className="cta-buttons">
                            <a href="#" className="btn btn-primary">
                                <i className="fas fa-download"></i> Download Now
                            </a>
                            <a href="#" className="btn btn-secondary">
                                <i className="fas fa-play"></i> Watch Demo
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="https://via.placeholder.com/500x350/6c5ce7/ffffff?text=BookVault+App" alt="BookVault Application Interface" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default hero