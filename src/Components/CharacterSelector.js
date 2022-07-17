import { MinusIcon } from '@chakra-ui/icons'
import { Grid, IconButton, Select } from '@chakra-ui/react'
import { useAppContext } from '../Context/AppContext'
import { AddCharacter } from './AddCharacter'

export function CharacterSelector () {
  const {
    actions: { removeCharacter, selectCharacter },
    state: { characters, selectedCharacter }
  } = useAppContext()

  const handleCharacterSelect = (e) => selectCharacter(e.target.value)

  const handleDeleteClick = () => removeCharacter()

  return (
    <Grid templateColumns='4fr 1fr 1fr' w='100%' gap={4}>
      <Select onChange={handleCharacterSelect} value={selectedCharacter}>
        {Object.keys(characters).map(character => (
          <option
            key={character}
            value={character}
          >
            {character}
          </option>
        ))}
      </Select>
      <AddCharacter />
      <IconButton
        aria-label="Delete Character"
        icon={<MinusIcon />}
        onClick={handleDeleteClick}
      />
    </Grid>
  )
}
