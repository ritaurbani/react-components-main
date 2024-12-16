import style from "./AppHeader.module.css";
import posts from "../data/posts"


function AppHeader() {

    

    return (
        <header className={style.header}>
            <div className="container">
                <h2 className={style.title}>Il mio blog</h2>
                
            </div>
        </header>
    )
}

export default AppHeader
