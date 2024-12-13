import AppButton from "./AppButton";
import style from "./AppCard.module.css";


function AppCard() {

    return (
        <div className={style.card}>
            <div className={style.image}>
                <img src="/img/ciambellone.jpeg" alt="" />
            </div>
            <div className={style.content}>
                <h5 className={style.title}>Titolo del Post</h5>
                <p className={style.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, maxime? Natus, consectetur. Rerum, sed odio. Voluptatibus nostrum recusandae quod nihil vitae iste perspiciatis, maxime blanditiis delectus! Tenetur esse doloribus quidem?</p>
                <AppButton/>
            </div>
        </div>
    )
}

export default AppCard;