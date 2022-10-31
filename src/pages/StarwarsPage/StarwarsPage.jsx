// import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { getCharacters } from '../../helpers/api.js'
import StarCharacters from '../../components/StarCharacters/StarCharacters'
import StarForm from '../../components/StarForm/StarForm'
import StarModal from '../../components/StarModal/StarModal'

export const StarwarsPage = () => {
  const [catchName, setCatchName] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [characters, setCharacters] = useState([])
  const [activeName, setActiveName] = useState('')
  // state = {
  //   catchName: "",
  //   isOpenModal: false,
  //   characters: [],
  //   activeName: "",
  // };

  const handleSubmit = (catchName) => {
    setCatchName(catchName)
  }

  const toggleModal = (event) => {
    const name = event?.currentTarget.id || null

    if (name) {
      setActiveName(name)
    }
    setIsOpenModal(!isOpenModal)
  }

  const getActiveData = () => {
    return characters.find((character) => activeName === character.name)
  }
  useEffect(() => {
    async function fetchData() {
      const data = await getCharacters(catchName)
      setCharacters(data.results)
    }
    fetchData()
  }, [catchName])
  // async componentDidUpdate(_, prevState) {
  // if (prevState.catchName !== this.state.catchName) {
  //   const data = await getCharacters(this.state.catchName);
  //   this.setState({ characters: data.results });
  // }
  // }

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
