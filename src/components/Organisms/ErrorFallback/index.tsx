import * as React from 'react'

import { Button, Text } from '../../Atoms'
import { Flex } from '../../Molecules'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }

  return (
    <Flex height="100vh">
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100%"
        flexDirection="column"
        rowGap="16px"
      >
        <Text size="lg">{'Something went wrong :('}</Text>
        <Button onClick={resetErrorBoundary}>Try again</Button>
      </Flex>
    </Flex>
  )
}

export default ErrorFallback
