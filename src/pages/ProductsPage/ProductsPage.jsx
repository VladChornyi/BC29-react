import { useEffect } from 'react'
import { getProducts } from '../../helpers/api'

export default function ProductsPage() {
  useEffect(() => {
    getProducts()
  }, [])

  return <div>ProductsPage</div>
}
