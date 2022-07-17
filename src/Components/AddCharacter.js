import { useState, useMemo } from 'react'
import { AddIcon } from '@chakra-ui/icons'
import { IconButton, Input, Modal, ModalOverlay, ModalContent, FormControl, FormLabel, Button, ModalHeader, Text, ModalBody, ModalFooter } from '@chakra-ui/react'
import { useAppContext } from '../Context/AppContext'

export function AddCharacter () {
  const [characterName, setCharacterName] = useState('')
  const { state: { addCharacterIsOpen, characters }, actions: { addCharacter, toggleAddCharacter } } = useAppContext()

  const handleClose = () => toggleAddCharacter()

  const handleOpenAddClick = () => toggleAddCharacter()

  const handleAddClick = () => {
    addCharacter(characterName)
    setCharacterName('')
  }

  const handleCharacterNameChange = (e) => setCharacterName(e.target.value)

  const isOpen = useMemo(() => (Object.keys(characters).length === 0 || addCharacterIsOpen), [characters, addCharacterIsOpen])

  return (
    <>
      <IconButton
        aria-label="Add Character"
        icon={<AddIcon />}
        onClick={handleOpenAddClick}
      />

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text>Add A Character</Text>
          </ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="characterName">Name</FormLabel>
              <Input id="characterName" size="lg" value={characterName} onChange={handleCharacterNameChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleAddClick}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
