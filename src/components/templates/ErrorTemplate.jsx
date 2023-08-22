import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from '../organisms/Header/index.jsx'
import {Colors} from '../../utils/constants'
import {Typography} from '@mui/material'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
  box-sizing: border-box;
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const ErrorTemplate = ({mainText, errorDescription}) => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Typography variant="h3" color={Colors.ERROR} textTransform="capitalize" letterSpacing={2}>
          {mainText}
        </Typography>
        {errorDescription && (
          <Typography variant="h6" textTransform="capitalize" color={Colors.SECONDARY}>
            {errorDescription}
          </Typography>
        )}
      </Content>
    </Wrapper>
  )
}

ErrorTemplate.propTypes = {
  mainText: PropTypes.string.isRequired,
  errorDescription: PropTypes.string
}

export default ErrorTemplate
