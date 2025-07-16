import React from 'react'

export const features = () => {
    return (
        <section className="features" id="features">
            <div className="container">
                <div className="section-title">
                    <h2>Powerful Features</h2>
                    <p>BookVault comes packed with everything you need to manage your personal book collection effectively.</p>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-book"></i>
                        </div>
                        <h3>Digital Catalog</h3>
                        <p>Create a complete digital catalog of your books with cover images, metadata, and custom tags for easy organization.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-search"></i>
                        </div>
                        <h3>Smart Search</h3>
                        <p>Find any book in your collection instantly with our powerful search that works by title, author, genre, or even your custom tags.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <h3>Reading Stats</h3>
                        <p>Track your reading habits with detailed statistics about books read, pages turned, and your reading speed over time.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <h3>Cross-Platform</h3>
                        <p>Access your book collection from any device - desktop, tablet, or smartphone. Your data syncs automatically across all platforms.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-barcode"></i>
                        </div>
                        <h3>Barcode Scanner</h3>
                        <p>Quickly add books to your collection by scanning their ISBN barcode with your smartphone camera.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-cloud"></i>
                        </div>
                        <h3>Cloud Backup</h3>
                        <p>Your book data is securely backed up in the cloud, so you never have to worry about losing your collection.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default features