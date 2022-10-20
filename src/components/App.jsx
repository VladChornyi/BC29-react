import './App.css'
import actors from '../data/acter.json'
// import { Actors } from '../components/ActerList/Acter.jsx'
import { ProductsList } from './ProductsList'

function App() {
  return (
    <>
      {/* <Actors actors={actors} /> */}
      <ProductsList actors={actors} />
    </>
  )
}

export default App
