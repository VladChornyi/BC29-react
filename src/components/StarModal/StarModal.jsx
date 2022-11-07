import { keyboard } from '@testing-library/user-event/dist/keyboard/index.js'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setToggleModal } from '../../redux/starwars/sliceStarwars.js'
import { Backdrop, Modal } from './StarModal.styled.js'

const StarModal = ({ toggleModal, starData }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('keydown', onEscape)
    return () => {
      window.removeEventListener('keydown', onEscape)
    }
  }, [])

  const onEscape = (e) => {
    if (e.key === 'Escape') {
      dispatch(setToggleModal(false))
    }
  }

  const handleClose = (e) => {
    if (e.currentTarget === e.target) {
      dispatch(setToggleModal(false))
    }
  }

  // const { name, gender, birth_year, hair_color, skin_color } =
  //   starData;

  return (
    <Backdrop onClick={handleClose}>
      <Modal>
        <span>name: {starData?.name}</span>
        <span>gender: {starData?.gender}</span>
        <span>birth_year: {starData?.birth_year}</span>
        <span>hair_color: {starData?.hair_color}</span>
        <span>skin_color: {starData?.skin_color}</span>
      </Modal>
    </Backdrop>
  )
}

export default StarModal

StarModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  starData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    birth_year: PropTypes.string.isRequired,
    hair_color: PropTypes.string.isRequired,
    skin_color: PropTypes.string.isRequired,
  }),
}
