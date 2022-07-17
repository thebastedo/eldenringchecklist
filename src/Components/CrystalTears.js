import { Checkbox, VStack } from '@chakra-ui/react'
import { useSearch } from '../Hooks/useSearch'
import { Search } from './Search'

import { crystalTears as allCrystalTears } from '../data/crystalTears'
import { useAppContext } from '../Context/AppContext'

export function CrystalTears () {
  const {
    actions: { toggleCrystalTear },
    state: { selectedCharacterData: { crystalTears } }
  } = useAppContext()

  const { searchFilter, ...searchProps } = useSearch()

  return (
    <VStack align="flex-start">
      <Search {...searchProps} />
      {allCrystalTears
        .filter(searchFilter)
        .map(c => (
          <Checkbox
            key={c}
            isChecked={crystalTears[c]}
            onChange={() => toggleCrystalTear(c)}
          >
            {c}
          </Checkbox>
        ))
      }
    </VStack>
  )
}
