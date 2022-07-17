import { createContext, useContext, useEffect } from 'react'
import { arrayOf, node, oneOfType } from 'prop-types'
import { useImmerReducer } from 'use-immer'

function updateLocalStorage (state) {
  window?.localStorage?.setItem('state', JSON.stringify(state))
}

function getLocalStorage () {
  return JSON.parse(window?.localStorage?.getItem('state'))
}

function getInitialState () {
  const defaultState = {
    addCharacterIsOpen: false,
    selectedCharacter: null,
    characters: {},
    talismans: {}
  }

  return {
    ...defaultState,
    ...getLocalStorage()
  }
}

const defaultCharacter = Object.freeze({
  ashOfWar: {},
  bellBearings: {},
  cookbooks: {},
  crystalTears: {},
  gestures: {},
  incantations: {},
  sorceries: {},
  talismans: {}
})

const ReducerActions = Object.freeze({
  ADD_CHARACTER: 'add_character',
  REMOVE_CHARACTER: 'remove_character',
  SELECT_CHARACTER: 'select_character',
  TOGGLE_ADD_CHARACTER: 'toggle_add_character',
  TOGGLE_ASH_OF_WAR: 'toggle_ash_of_War',
  TOGGLE_BELL_BEARING: 'toggle_bell_bearing',
  TOGGLE_COOKBOOK: 'toggle_cookbook',
  TOGGLE_CRYSTAL_TEAR: 'toggle_crystal_tear',
  TOGGLE_GESTURE: 'toggle_gesture',
  TOGGLE_INCANTATION: 'toggle_incantation',
  TOGGLE_SORCERY: 'toggle_sorcery',
  TOGGLE_TALSIMAN: 'toggle_talisman'
})

export const produceRducer = (draft, action) => {
  switch (action.type) {
    case ReducerActions.ADD_CHARACTER: {
      draft.characters[action.character] = { ...defaultCharacter }
      draft.selectedCharacter = action.character
      draft.addCharacterIsOpen = false
      break
    }
    case ReducerActions.REMOVE_CHARACTER: {
      console.log('removing: ', draft.selectedCharacter)
      delete draft.characters[draft.selectedCharacter]
      draft.selectedCharacter = Object.keys(draft.characters)[0] || null
      break
    }
    case ReducerActions.SELECT_CHARACTER: {
      draft.selectedCharacter = action.character
      break
    }
    case ReducerActions.TOGGLE_ADD_CHARACTER: {
      draft.addCharacterIsOpen = !draft.addCharacterIsOpen
      break
    }
    case ReducerActions.TOGGLE_ASH_OF_WAR: {
      draft.characters[draft.selectedCharacter].ashOfWar[action.ashOfWar] =
        !draft.characters[draft.selectedCharacter].ashOfWar[action.ashOfWar]
      break
    }
    case ReducerActions.TOGGLE_BELL_BEARING: {
      draft.characters[draft.selectedCharacter].bellBearings[action.bellBearing] =
        !draft.characters[draft.selectedCharacter].bellBearings[action.bellBearing]
      break
    }
    case ReducerActions.TOGGLE_COOKBOOK: {
      draft.characters[draft.selectedCharacter].cookbooks[action.cookbook] =
        !draft.characters[draft.selectedCharacter].cookbooks[action.cookbook]
      break
    }
    case ReducerActions.TOGGLE_CRYSTAL_TEAR: {
      draft.characters[draft.selectedCharacter].crystalTears[action.crystalTear] =
        !draft.characters[draft.selectedCharacter].crystalTears[action.crystalTear]
      break
    }
    case ReducerActions.TOGGLE_GESTURE: {
      draft.characters[draft.selectedCharacter].gestures[action.gesture] =
        !draft.characters[draft.selectedCharacter].gestures[action.gesture]
      break
    }
    case ReducerActions.TOGGLE_INCANTATION: {
      draft.characters[draft.selectedCharacter].incantations[action.incantation] =
        !draft.characters[draft.selectedCharacter].incantations[action.incantation]
      break
    }
    case ReducerActions.TOGGLE_SORCERY: {
      draft.characters[draft.selectedCharacter].sorceries[action.sorcery] =
        !draft.characters[draft.selectedCharacter].sorceries[action.sorcery]
      break
    }
    case ReducerActions.TOGGLE_TALSIMAN: {
      draft.characters[draft.selectedCharacter].talismans[action.talisman] =
        !draft.characters[draft.selectedCharacter].talismans[action.talisman]
      break
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const AppContext = createContext()

export function AppProvider ({ children }) {
  const initialState = getInitialState()
  const [state, dispatch] = useImmerReducer(produceRducer, initialState)

  useEffect(() => {
    updateLocalStorage(state)
  }, [state])

  const actions = {
    addCharacter: (character) => dispatch({
      type: ReducerActions.ADD_CHARACTER,
      character
    }),
    removeCharacter: () => dispatch({
      type: ReducerActions.REMOVE_CHARACTER
    }),
    selectCharacter: (character) => dispatch({
      type: ReducerActions.SELECT_CHARACTER,
      character
    }),
    toggleAddCharacter: () => dispatch({
      type: ReducerActions.TOGGLE_ADD_CHARACTER
    }),
    toggleAshOfWar: (ashOfWar) => dispatch({
      type: ReducerActions.TOGGLE_ASH_OF_WAR,
      ashOfWar
    }),
    toggleBellBearing: (bellBearing) => dispatch({
      type: ReducerActions.TOGGLE_BELL_BEARING,
      bellBearing
    }),
    toggleCookbook: (cookbook) => dispatch({
      type: ReducerActions.TOGGLE_COOKBOOK,
      cookbook
    }),
    toggleCrystalTear: (crystalTear) => dispatch({
      type: ReducerActions.TOGGLE_CRYSTAL_TEAR,
      crystalTear
    }),
    toggleGesture: (gesture) => dispatch({
      type: ReducerActions.TOGGLE_GESTURE,
      gesture
    }),
    toggleIncantation: (incantation) => dispatch({
      type: ReducerActions.TOGGLE_INCANTATION,
      incantation
    }),
    toggleSorcery: (sorcery) => dispatch({
      type: ReducerActions.TOGGLE_SORCERY,
      sorcery
    }),
    toggleTalisman: (talisman) => dispatch({
      type: ReducerActions.TOGGLE_TALSIMAN,
      talisman
    })
  }

  const selectedCharacterData = state.characters[state.selectedCharacter]

  const value = {
    state: { ...state, selectedCharacterData },
    actions,
    dispatch
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

AppProvider.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node
  ]).isRequired
}

export function useAppContext () {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
