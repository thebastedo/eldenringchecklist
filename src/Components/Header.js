import { Center, Grid, GridItem, Heading, VStack } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { CharacterSelector } from './CharacterSelector'

export function Header () {
  return (
    <header>
      <Grid templateColumns='4fr 1fr' p={8}>
        <GridItem>
          <Center>
            <Heading as="h1" size="4xl">
              Elden Ring Checklist
            </Heading>
          </Center>
        </GridItem>
        <GridItem>
          <VStack align="flex-end">
            <ColorModeSwitcher />
            <CharacterSelector />
          </VStack>
        </GridItem>
      </Grid>
    </header>
  )
}
