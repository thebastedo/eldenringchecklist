import { Link, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export function Navigation () {
  return (
    <VStack>
      <Link as={RouterLink} to='/ash-of-war'>Ash of War</Link>
      <Link as={RouterLink} to='/bell-bearings'>Bell Bearings</Link>
      {/* <Link as={RouterLink} to='/Bosses'>Bosses</Link> */}
      <Link as={RouterLink} to='/cookbooks'>Cookbooks</Link>
      <Link as={RouterLink} to='/crystal-tears'>Crystal Tears</Link>
      <Link as={RouterLink} to='/gestures'>Gestures</Link>
      <Link as={RouterLink} to='/incantations'>Incantations</Link>
      <Link as={RouterLink} to='/sorceries'>Sorceries</Link>
      {/* <Link as={RouterLink} to='/sites-of-grace'>Sites of Grace</Link> */}
      <Link as={RouterLink} to='/talismans'>Talismans</Link>
    </VStack>
  )
}
