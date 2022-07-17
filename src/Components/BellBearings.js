import { Checkbox, VStack } from '@chakra-ui/react'
import { useSearch } from '../Hooks/useSearch'
import { Search } from './Search'

import { bellBearings as allBellBearings } from '../data/bellBearings'
import { useAppContext } from '../Context/AppContext'

export function BellBearings () {
  const {
    actions: { toggleBellBearing },
    state: { selectedCharacterData: { bellBearings } }
  } = useAppContext()

  const { searchFilter, ...searchProps } = useSearch()

  return (
    <VStack align="flex-start">
      <Search {...searchProps} />
      {allBellBearings
        .filter(searchFilter)
        .map(b => (
          <Checkbox
            key={b}
            isChecked={bellBearings[b]}
            onChange={() => toggleBellBearing(b)}
          >
            {b}
          </Checkbox>
        ))
      }
    </VStack>
  )
}
