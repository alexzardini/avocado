import React from 'react'

const Content = ({children}) => (
    <React.Fragment>
        <div className="container">
            {children}
        </div>
        <style jsx>{`
            .container {
                display: block;
                padding: 0 20px;
                margin: 0 auto;
            }
        `}</style>
    </React.Fragment>
)

export default Content