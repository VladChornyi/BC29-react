import React, { useEffect } from 'react'

import StarCharacters from '../../components/StarCharacters/StarCharacters'
import StarForm from '../../components/StarForm/StarForm'
import StarModal from '../../components/StarModal/StarModal'
import { useDispatch, useSelector } from 'react-redux'
import { getCharactersData } from '../../redux/starwars/operations.js'
import {
  getActiveName,
  getCatchName,
  getCharactersState,
  getIsOpenModal,
} from '../../redux/starwars/selectors.js'
import {
  setActiveName,
  setCatchName,
  setToggleModal,
} from '../../redux/starwars/sliceStarwars.js'

export const StarwarsPage = () => {
  const catchName = useSelector(getCatchName)
  const isOpenModal = useSelector(getIsOpenModal)
  const characters = useSelector(getCharactersState)
  const activeName = useSelector(getActiveName)

  const dispatch = useDispatch()

  const handleSubmit = (catchName) => {
    dispatch(setCatchName(catchName))
  }

  const toggleModal = (event) => {
    const name = event?.currentTarget.id || null

    if (name) {
      dispatch(setActiveName(name))
      dispatch(setToggleModal(true))
    }
  }

  const getActiveData = () => {
    return characters.find((character) => activeName === character.name)
  }

  useEffect(() => {
    dispatch(getCharactersData(catchName))
  }, [catchName])

  return (
    <>
      <StarForm onSubmit={handleSubmit} />
      <StarCharacters characters={characters} toggleModal={toggleModal} />
      {isOpenModal && (
        <StarModal toggleModal={toggleModal} starData={getActiveData()} />
      )}
    </>
  )
}
