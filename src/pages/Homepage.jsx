import { Link } from "react-router-dom"

export const HomePage = () => {
    return (
        <ul>
            <li>
                <Link to='/actors'>Actors</Link>
            </li>
            <li>
                <Link to='/products'>Products</Link>
            </li>
            <li>
                <Link to='/tabs'>Tabs</Link>
            </li>
            <li>
                <Link to='/starwars'>Starwars</Link>
            </li>
            <li>
                <Link to='/albums'>Albums</Link>
            </li>
            <li>
                <Link to='/counter'>Counter</Link>
            </li>
            <li>
                <Link to='/olx'>Olx</Link>
            </li>
        </ul>
    )
}