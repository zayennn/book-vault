import React from 'react'

export const pricing = () => {
    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="section-title">
                    <h2>Simple Pricing</h2>
                    <p>Choose the plan that fits your reading habits. All plans include a 30-day free trial.</p>
                </div>

                <div className="pricing-grid">
                    <div className="pricing-card">
                        <h3>Basic</h3>
                        <div className="price">$4<span>/month</span></div>
                        <ul className="pricing-features">
                            <li>Up to 100 books</li>
                            <li>Basic cataloging</li>
                            <li>Manual entry</li>
                            <li>Email support</li>
                        </ul>
                        <a href="#" className="btn btn-secondary">Get Started</a>
                    </div>

                    <div className="pricing-card popular">
                        <h3>Pro</h3>
                        <div className="price">$8<span>/month</span></div>
                        <ul className="pricing-features">
                            <li>Unlimited books</li>
                            <li>Advanced cataloging</li>
                            <li>Barcode scanner</li>
                            <li>Reading statistics</li>
                            <li>Priority support</li>
                        </ul>
                        <a href="#" className="btn btn-primary">Get Started</a>
                    </div>

                    <div className="pricing-card">
                        <h3>Family</h3>
                        <div className="price">$12<span>/month</span></div>
                        <ul className="pricing-features">
                            <li>Up to 5 users</li>
                            <li>Unlimited books</li>
                            <li>All Pro features</li>
                            <li>Shared collections</li>
                            <li>Family reading stats</li>
                            <li>24/7 support</li>
                        </ul>
                        <a href="#" className="btn btn-secondary">Get Started</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default pricing