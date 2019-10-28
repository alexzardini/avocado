import React from 'react'
import colors from 'utils/theme/colors'
import fonts from 'utils/theme/fonts'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {useSelector} from 'react-redux'

export default function Header() {

    const cartUnitys = useSelector(state => state.cart && state.cart.data && state.cart.data.length)

    return (
        <>
            <header>
                <Link href="/"><img src="/logo.svg" /></Link>
                <Link href="/cart">
                    <div className="cart-icon">
                        <FontAwesomeIcon icon={faShoppingCart} color={colors.secondary} />
                        <span>{cartUnitys}</span>
                    </div>
                </Link>
            </header>
            <style jsx>{`
                header {
                    background-image: url(./avocado.svg);
                    background-color: ${colors.primary};
                    background-position: right center;
                    background-repeat: no-repeat;
                    background-size: contain;
                    padding: 20px;
                    display: flex;
                    justify-content: space-between;
                }
                header h2 {
                    color: ${colors.secondary};
                    font-weight: ${fonts.weight.kilo};
                    text-transform: uppercase;
                }
                .cart-icon {
                    width: 30px;
                    height: 30px;
                    position: relative;
                }
                .cart-icon span {
                    background: ${colors.secondary};
                    color: ${colors.primary};
                    width: 15px;
                    height: 15px;
                    border-radius: 100%;
                    text-align: center;
                    font-size: 10px;
                    position: absolute;
                    bottom: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </>
    )
}