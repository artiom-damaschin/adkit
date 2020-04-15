import React from 'react'
import PropTypes from 'prop-types'

const noop = () => undefined

function Button(props) {
  const { type, onClick, children } = props
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  onClick: noop,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  onClick: PropTypes.func,
}

export default Button
