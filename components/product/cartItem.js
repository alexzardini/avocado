import React from 'react'
import {useDispatch} from 'react-redux'
import {Text, Card} from 'components/ui'
import colors from 'utils/theme/colors'
import {incrementItem, decrementItem, removeItem} from '@redux/actions/cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function CartItem({product, handleClick}) {
    const {image_url, name, price, product_id, qtd = 1} = product
    const dispatch = useDispatch()
    const total = price * qtd

    return (
        <>
            <div className="d-flex">
                <div className="photo">
                    <img src={image_url} />
                </div>
                <div className="description">
                    <Text>{name}</Text>
                    <Text color="primary">{(total / 100).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</Text>
                </div>
                <div className="actions">
                    <div className="qtd-box">
                        <a onClick={() => dispatch(decrementItem(product_id))}>-</a>
                        {qtd}
                        <a onClick={() => dispatch(incrementItem(product_id))}>+</a>
                    </div>
                    <div className="trash-button">
                       <a onClick={() => dispatch(removeItem(product_id))}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </a>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .trash-button { width: 17px; height: 17px; color: ${colors.negative} }
                .d-flex { display: flex; }
                p {margin: 0;}
                .qtd-box a { padding: 5px; }
                .photo { width: 90px;height: 90px;justify-content: center;display: flex; }
                .actions {
                    display: flex;
                    width: 180px;
                    justify-content: space-between;
                    align-items: center;
                }
                .qtd-box {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    width: 100px;
                }
                .qtd-box a {
                    cursor: pointer;
                    padding: 5px;
                    font-size: 29px;
                    background: #014a31;
                    width: 20px;
                    height: 20px;
                    display: flex;
                    border-radius: 8px;
                    align-items: center;
                    justify-content: center;
                    color: #ffbede;
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