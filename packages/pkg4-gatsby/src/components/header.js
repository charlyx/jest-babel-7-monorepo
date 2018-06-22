import React from 'react'
import { MyStuff } from 'pkg3-react'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <MyStuff />
    </div>
  </div>
)

export default Header
