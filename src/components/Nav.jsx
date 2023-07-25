import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <header className="flex-between">
            <nav className="flex-left half">
                <Link to={'/form'}>Form 📋</Link>
                <Link to={'/display'}>Display 👀</Link>
            </nav>
            <img src="/rick.webp" style={{width: "35%"}}/>
            <nav className="flex-right half">
                <Link to={'/'}>Home 🏠</Link>
            </nav>
        </header>
    )
}

export default Nav
