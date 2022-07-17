import { Checkbox, VStack } from '@chakra-ui/react'
import { useSearch } from '../Hooks/useSearch'
import { Search } from './Search'

import { cookbooks as allCookbooks } from '../data/cookbooks'
import { useAppContext } from '../Context/AppContext'

export function Cookbooks () {
  const {
    actions: { toggleCookbook },
    state: { selectedCharacterData: { cookbooks } }
  } = useAppContext()

  const { searchFilter, ...searchProps } = useSearch()

  return (
    <VStack align="flex-start">
      <Search {...searchProps} />
      {allCookbooks
        .filter(searchFilter)
        .map(c => (
          <Checkbox
            key={c}
            isChecked={cookbooks[c]}
            onChange={() => toggleCookbook(c)}
          >
            {c}
          </Checkbox>
        ))
      }
    </VStack>
  )
}
