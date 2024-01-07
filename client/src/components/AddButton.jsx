import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import './AddButton.scss'
const AddButton = () => {
    return (
        <div className="addButton">
            <Link to={'/add'}>
                <IoAddCircleOutline style={{ color: 'white', fontSize: '90px', marginTop: '24px', cursor: 'pointer' }} />
            </Link>

        </div>
    )
}
export default AddButton