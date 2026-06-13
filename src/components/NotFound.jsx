import { Link } from "react-router-dom"
export default function NotFound(){
    return(
        <>
            <h1>Error (404) this page is not found</h1>
            <Link to={-1}>
            <button>Go Back</button>
            </Link>
        </>
    )
}