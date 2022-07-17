import { Checkbox, VStack } from '@chakra-ui/react'
import { useSearch } from '../Hooks/useSearch'
import { Search } from './Search'

import { talismans as allTalismans } from '../data/talismans'
import { useAppContext } from '../Context/AppContext'

export function Talismans () {
  const {
    actions: { toggleTalisman },
    state: { selectedCharacterData: { talismans } }
  } = useAppContext()

  const { searchFilter, ...searchProps } = useSearch()

  return (
    <VStack align="flex-start">
      <Search {...searchProps} />
      {allTalismans
        .filter(searchFilter)
        .map(t => (
          <Checkbox
            key={t}
            isChecked={talismans[t]}
            onChange={() => toggleTalisman(t)}
          >
            {t}
          </Checkbox>
        ))
      }
    </VStack>
  )
}
