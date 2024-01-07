import { useNavigate } from "react-router-dom"
import { IoArrowBack } from "react-icons/io5";

const BackToHome = () => {
    const navigate = useNavigate()

    function handleNavigate(event) {
        event.preventDefault()
        navigate(-1)
    }

    return (
        <form onSubmit={handleNavigate}>
            <button type="submit">
                <IoArrowBack />
            </button>
        </form>
    )
}
export default BackToHome