import { Checkbox, VStack } from '@chakra-ui/react'
import { useSearch } from '../Hooks/useSearch'
import { Search } from './Search'

import { useAppContext } from '../Context/AppContext'
import { gestures as allGestures } from '../data/gestures'

export function Gestures () {
  const {
    actions: { toggleGesture },
    state: { selectedCharacterData: { gestures } }
  } = useAppContext()

  const { searchFilter, ...searchProps } = useSearch()

  return (
    <VStack align="flex-start">
      <Search {...searchProps} />
      {allGestures
        .filter(({ name }) => searchFilter(name))
        .map(({ name, automatic }) => (
          <Checkbox
            key={name}
            isDisabled={automatic}
            isChecked={automatic || gestures[name]}
            onChange={() => toggleGesture(name)}
          >
            {name}
          </Checkbox>
        )
        )}
    </VStack>
  )
}
