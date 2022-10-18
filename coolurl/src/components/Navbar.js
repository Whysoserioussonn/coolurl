import { Link } from "react-router-dom";

export default function NavBar () {
    return(
        <ul>
            <li>
                <Link to='/cats'>Cat Facts</Link>
            </li>
            <li>
                <Link to='/dogs'>Dog Facts</Link>
            </li>
            <li>
                <Link to='/zooanimals'>Zooanimals</Link>
            </li>
        </ul>
    )
}