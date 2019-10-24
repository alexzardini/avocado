import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import ProductCard from './card.js'

const defaultProps = {
    photo: "http://product.testing.url/0109",
    title: "name",
    price: 1000,
    id: 2
}

const component = shallow(<ProductCard {...defaultProps} />)
describe('With Snapshot Testing', () => {

    it('Layout struct snapshot', () => {
        const tree = renderer.create(<ProductCard {...defaultProps} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    describe('Check props render correct', () => {
        it('Expect photo url = "http://product.testing.url/0109"', () => {
            expect(component.find(`img[src='${defaultProps.photo}']`).exists()).toBe(true)
        })

        it('Expect price is R$ 10,00"', () => {
            expect(component.find('p').text()).toEqual('R$10.00')
        })
    })
})