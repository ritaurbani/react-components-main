import AppButton from "./AppButton";
import style from "./AppCard.module.css";
import posts from "../data/posts"



function AppCard({title, image, content}) {

    return (
        <div className={style.card}>
            <div className={style.image}>
                <img src="/img/ciambellone.jpeg" alt="" />
            </div>
            <div className={style.content}>
                <h5 className={style.title}>{title}</h5>
                <p className={style.text}>{content}</p>
                <AppButton/>
            </div>
        </div>
    )
}

export default AppCard; 