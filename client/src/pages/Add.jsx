import { Link } from "react-router-dom"
import AddRating from "./AddRating"
import './Add.scss'

const Add = () => {
    return (
        <div className="add_container">
            <Link to={'/add/rating'}>
                Rating
            </Link>
            <Link to={'/add/event'}>
                Event
            </Link>
        </div>
    )
}
export default Add