import React from 'react'

import renderer from 'react-test-renderer'

import Header from './Header'

describe('Search', function () {
    it('renders correctly', () => {
        const component = renderer.create(<Header />).toJSON()
        expect(component).toMatchSnapshot()
    })
})
