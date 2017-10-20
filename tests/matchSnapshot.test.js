import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import { expect } from 'chai'

Enzyme.configure({ adapter: new Adapter() })

function MyReactComponent() {
  return (
    <div className="abc-234-45">
      Lorem Ipsum dolor
    </div>
  )
}

describe('matchSnapshot', () => {
  it('should match snapshots', () => {
    const wrapper = shallow(<MyReactComponent/>)

    expect(wrapper).to.matchSnapshot()
    expect(123).to.matchSnapshot()
    expect({ a: 1, b: { c: 'lorem' } }).to.matchSnapshot()
  })
})