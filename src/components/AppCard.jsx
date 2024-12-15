import AppButton from "./AppButton";
import style from "./AppCard.module.css";
import posts from "../data/posts";



function AppCard({title, image, content,tags}) {
    const imagePath = `/img/${image}`;
    return (
        <div className={style.card}>
            <div className={style.image}>
                <img src={image ? imagePath : 'https://picsum.photos/400/300'} alt="" />
            </div>
            <div className={style.content}>
                <div className={style.wrap}>
                    <h5 className={style.title}>{title}</h5>
                    { tags.map((tag)=>(
                        <span className={`${style.tag} ${tag === "html" ? style.htmlt : ''} ${tag === "js" ? style.jst : ''} ${tag === "css" ? style.csst : ''}`}>{tag}</span>
                    ))} 
                </div>
                <p className={style.text}>{content}</p>
                {/* <span>{props.post.published ? 'Si' : 'No'}</span> */}

                <AppButton />
            </div>
        </div>
    )
}

export default AppCard; 