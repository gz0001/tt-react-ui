import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Container } from './'
import { Row } from '../Row'
import { Col } from '../Col'
import { Box } from '../Box'
import { text, boolean } from '@storybook/addon-knobs/react'

;(storiesOf('Components/Grid/Container', module) as any).addWithJSX(
  'A basic component can be used as container',
  () => (
    <div style={{ padding: '20px 40px' }}>
      <Container className={text('className', 'border-2')} fluid={boolean('fluid', false)}>
        {text('chidren', 'i am a container')}
      </Container>
    </div>
  )
)

;(storiesOf('Components/Grid/Demo', module) as any).addWithJSX(
  'An example how to use grid system',
  () => {
    return (
      <Container fluid={boolean('fluid', true)}>
        <Row>
          <Col cols={text('1.col', '12, md:6, lg:3')}>
            <Box h="16" bg="first" my="4" />
          </Col>
          <Col cols={text('2.col', '12, md:6, lg:3')}>
            <Box h="16" bg="first" my="4" />
          </Col>
          <Col cols={text('3.col', '12, md:6, lg:3')}>
            <Box h="16" bg="first" my="4" />
          </Col>
          <Col cols={text('4.col', '12, md:6, lg:3')}>
            <Box h="16" bg="first" my="4" />
          </Col>
        </Row>
      </Container>
    )
  }
)
