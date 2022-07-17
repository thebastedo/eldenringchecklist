import { Checkbox, VStack } from '@chakra-ui/react'
import { useSearch } from '../Hooks/useSearch'
import { Search } from './Search'

import { incantations as allIncantations } from '../data/incantations'
import { useAppContext } from '../Context/AppContext'

export function Incantations () {
  const {
    actions: { toggleIncantation },
    state: { selectedCharacterData: { incantations } }
  } = useAppContext()

  const { searchFilter, ...searchProps } = useSearch()

  return (
    <VStack align="flex-start">
      <Search {...searchProps} />
      {allIncantations
        .filter(searchFilter)
        .map(i => (
          <Checkbox
            key={i}
            isChecked={incantations[i]}
            onChange={() => toggleIncantation(i)}
          >
            {i}
          </Checkbox>
        ))
      }
    </VStack>
  )
}
