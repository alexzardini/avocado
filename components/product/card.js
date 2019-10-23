import React from 'react'
import Text from '../ui/text'

const ProductCard = ({id, handleClick, photo, title, price}) => (
    <React.Fragment>
        <div className="card">
            <div className="photo">
                <img src={photo} />
            </div>
            <div className="description">
                <Text>{title}</Text>
                <p>{(price / 100).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</p>
            </div>
            <div className="action">
               <a onClick={() => handleClick(id)}>
                    <img src="data:image/png;base64,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" />
                </a>
            </div>
        </div>
        <style jsx>{`
            p {margin: 0;}
            .photo { width: 90px;height: 90px;justify-content: center;display: flex; }
            .card {
                margin-bottom: 15px;
                display: flex;
                border-radius: 4px;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
            }
            .action {
                width: 90px;
                height: 90px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .action img {
                width: 40px;
                height: 40px;
            }
            .description {
                flex: 1;
                display: flex;
                flex-direction: column;
                margin: 0 20px;
            }
        `}</style>
    </React.Fragment>
)

export default ProductCard