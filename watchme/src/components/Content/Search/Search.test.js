import React from 'react'

import Adapter from 'enzyme-adapter-react-16'
import Search from './Search'
import { shallow, configure } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

configure({ adapter: new Adapter() })
const mockFunction = jest.fn()

describe('Search', function () {
    it('renders correctly', () => {
        const component = shallow(
            <Search onChange={mockFunction} searchString={''} />
        )
        expect(shallowToJson(component)).toMatchSnapshot()
    })
    it('changes search value', () => {
        const component = shallow(
            <Search onChange={mockFunction} searchString={'test'} />
        )
        expect(shallowToJson(component)).toMatchSnapshot()
    })
})
