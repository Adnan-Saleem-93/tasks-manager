import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from '../organisms/Header/index.jsx'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 1rem auto;
  padding: 1rem 2rem;
`

const GenericTemplate = ({children, ...props}) => {
  return (
    <Wrapper {...props}>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  )
}

GenericTemplate.propTypes = {
  children: PropTypes.any.isRequired
}

export default GenericTemplate
