import React from 'react'

const Content = ({children}) => (
    <>
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
    </>
)

export default Content