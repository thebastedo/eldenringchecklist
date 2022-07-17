import { string, func } from 'prop-types'
import { CloseIcon, SearchIcon } from '@chakra-ui/icons'
import { HStack, InputGroup, InputLeftAddon, Input, IconButton } from '@chakra-ui/react'

export function Search ({ search, setSearch }) {
  return (
      <HStack>
        <InputGroup>
          <InputLeftAddon>
            <SearchIcon />
          </InputLeftAddon>
          <Input
            placeholder='search'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </InputGroup>
        {search &&
          <IconButton
            aria-label="Delete Character"
            icon={<CloseIcon />}
            onClick={() => setSearch('')}
          />
        }
      </HStack>
  )
}

Search.propTypes = {
  search: string.isRequired,
  setSearch: func.isRequired
}
