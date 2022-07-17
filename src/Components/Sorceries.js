import { Checkbox, VStack } from '@chakra-ui/react'
import { useSearch } from '../Hooks/useSearch'
import { Search } from './Search'

import { sorceries as allSorceries } from '../data/sorceries'
import { useAppContext } from '../Context/AppContext'

export function Sorceries () {
  const {
    actions: { toggleSorcery },
    state: { selectedCharacterData: { sorceries } }
  } = useAppContext()

  const { searchFilter, ...searchProps } = useSearch()

  return (
    <VStack align="flex-start">
      <Search {...searchProps} />
      {allSorceries
        .filter(searchFilter)
        .map(s => (
          <Checkbox
            key={s}
            isChecked={sorceries[s]}
            onChange={() => toggleSorcery(s)}
          >
            {s}
          </Checkbox>
        ))
      }
    </VStack>
  )
}
