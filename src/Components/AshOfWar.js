import { Checkbox, VStack } from '@chakra-ui/react'

import { Search } from './Search'
import { ashes as availableAshes } from '../data/ashes'
import { useAppContext } from '../Context/AppContext'
import { useSearch } from '../Hooks/useSearch'

export function AshOfWar () {
  const { actions: { toggleAshOfWar }, state: { selectedCharacterData: { ashOfWar } } } = useAppContext()
  const { searchFilter, ...searchProps } = useSearch()

  return (
    <VStack align="flex-start">
      <Search {...searchProps} />
      {availableAshes
        .filter(searchFilter)
        .map(a => (
          <Checkbox
            key={a}
            isChecked={ashOfWar[a] || false}
            onChange={() => toggleAshOfWar(a)}
          >
            {a}
          </Checkbox>
        ))
      }
    </VStack>
  )
}
