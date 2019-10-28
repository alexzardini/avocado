import React from 'react'
import {useDispatch} from 'react-redux'
import {currencyConvert} from 'utils/func'
import {Text, Card} from 'components/ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function ProductCard({product, handleClick}) {
    const {image_url, name, price} = product
    const dispatch = useDispatch()
    
    return (
        <>
            <Card>
                <div className="photo">
                    <img src={image_url} />
                </div>
                <div className="description">
                    <Text>{name}</Text>
                    <Text color="primary">{currencyConvert(price)}</Text>
                </div>
                <div className="action">
                    <a onClick={() => dispatch(handleClick(product))}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </a>
                </div>
            </Card>
            <style jsx>{`
                p {margin: 0;}
                .photo { width: 90px;height: 90px;justify-content: center;display: flex; }
                .action {
                    width: 90px;
                    height: 90px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .action a { width: 20px;}
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
        </>
    )
}