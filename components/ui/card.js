import React from 'react'


const Card = ({children}) => (
    <>
        <div className="card">
            {children}
        </div>
        <style jsx>{`
            .card {
                margin-bottom: 15px;
                display: flex;
                border-radius: 4px;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
            }
        `}</style>
    </>
)

export default Card