import headerStyle from "./header.module.css";
import Link from "next/link";

const HeaderPage = () => {
    return (
        <header className={headerStyle.heading}>
            <div className={headerStyle.design}>
                <h1 className={headerStyle.h1}>2nd Assignment</h1>
                <nav>
                    <ul className={headerStyle.list}>
                        <li><Link href="/" className={headerStyle.style}>Home</Link></li>
                        <li><Link href="#" className={headerStyle.style}>About</Link></li>
                        <li><Link href="#" className={headerStyle.style}>Contact</Link></li>
                    </ul>

                </nav>
            </div>
        </header>
    )
}
export default HeaderPage;