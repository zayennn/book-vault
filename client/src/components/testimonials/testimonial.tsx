import React from 'react'

export const testimonial = () => {
    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="section-title">
                    <h2>What Readers Say</h2>
                    <p>Don't just take our word for it. Here's what our users have to say about BookVault.</p>
                </div>

                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            "BookVault has completely transformed how I manage my personal library. I can finally find any book in my collection within seconds!"
                        </div>
                        <div className="testimonial-author">
                            <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sarah Johnson" className="author-avatar" />
                                <div className="author-info">
                                    <h4>Sarah Johnson</h4>
                                    <p>Avid Reader</p>
                                </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            "As a book collector with over 3,000 volumes, I've tried every cataloging system out there. BookVault is by far the most intuitive and powerful."
                        </div>
                        <div className="testimonial-author">
                            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Michael Chen" className="author-avatar" />
                                <div className="author-info">
                                    <h4>Michael Chen</h4>
                                    <p>Book Collector</p>
                                </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            "The reading statistics feature motivated me to read more consistently. I've doubled my reading speed in just six months using BookVault!"
                        </div>
                        <div className="testimonial-author">
                            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emma Rodriguez" className="author-avatar" />
                                <div className="author-info">
                                    <h4>Emma Rodriguez</h4>
                                    <p>Book Club Organizer</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default testimonial