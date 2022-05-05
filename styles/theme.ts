import { extendTheme } from '@chakra-ui/react'

import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('white', 'gray.900')(props),
    },
  }),
}

const colors = {
}

const components = {
  Button: {
    sizes: {
    },
  },
  Text: {
    baseStyle: {
      fontWeight: 400,
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: 400,
    },
  },
}

const font = {
}

const overrides = {
  config,
  colors,
  components,
  font,
  styles,
}

const theme = extendTheme(overrides)
export default theme