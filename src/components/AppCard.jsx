import AppButton from "./AppButton";
import style from "./AppCard.module.css";
import posts from "../data/posts";



function AppCard({title, image, content, tags}) {
    const imagePath = `/img/${image}`;

  

    
    return (
        <div className={style.card}>
            <div className={style.image}>
                <img src={image ? imagePath : 'https://picsum.photos/400/300'} alt="" />
            </div>
            <div className={style.content}>
                <div className={style.wrap}>
                    <h5 className={style.title}>{title}</h5>
                    {/* per ogni tag aggiungiamo classe style.tag (comune a tutti i tag e una classe dinamica ex:style.html) */}
                    { tags.map((curTag, index)=>(
                        <span key={index} className={`${style.tag} ${style[curTag]}`}>{curTag}</span>
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