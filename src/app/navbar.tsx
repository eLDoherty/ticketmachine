import Link from "next/link"
import defaultProfile from "../../public/images/defaultProfile.jpg";
import Image from "next/image";
import "./styles/layout/navbar.scss";

export default function Navbar()
{
    return (
        <header className="tm-header">
            <div className="tm-container">
                <div className="tm-wrapper">
                    <div className="tm-wrapper__logo">
                        <h1>Ticket Machine</h1>
                    </div>
                    <nav className="tm-wrapper__menu">
                        <ul className="tm-wrapper__menu--list">
                            <li className="tm-list"><Link href="/">Home</Link></li>
                            <li className="tm-list"><Link href="/">About</Link></li>
                            <li className="tm-list"><Link href="/">News</Link></li>
                            <li className="tm-list"><Link href="/">Privacy</Link></li>
                        </ul>
                        <Link href="/profile/julian">
                            <div className="profile tm-icon">
                                <Image 
                                    src={defaultProfile} 
                                    alt="User profile" 
                                    width={40} 
                                    height={40} 
                                    className="profile-image" 
                                />
                                <p className="profile-name">Hi, Julian!</p>
                            </div>
                        </Link>   
                    </nav>
                </div>
            </div>
        </header>
    )
}