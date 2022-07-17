import {
  ChakraProvider,
  Grid,
  GridItem,
  theme
} from '@chakra-ui/react'

import { AppProvider } from './Context/AppContext'
import { Checklists } from './Components/Checklists'
import { Header } from './Components/Header'
import { Navigation } from './Components/Navigation'

function App () {
  return (
    <AppProvider>
      <ChakraProvider theme={theme}>
        <Grid
          templateColumns="10rem 1fr"
          templateRows="5rem 1fr"
          gap="1rem"
        >
          <GridItem rowSpan={2} colSpan={2}>
            <Header />
          </GridItem>
          <Navigation />
          <Checklists />
        </Grid>
      </ChakraProvider>
    </AppProvider>
  )
}

export default App
