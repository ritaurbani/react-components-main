import AppCard from "./AppCard"
import posts from "../data/posts"



function AppMain() {

//funzione mi ritorna jsx quindi racchiudo in {}
    // const printCard = () => {
    //     return posts.map((post) => (
    //         <div className="col">
    //             <AppCard
    //                 image={post.image}
    //                 title={post.title}
    //                 content={post.content}
    //             />
    //         </div>
    //     ))
    // }
    
    return (
        <main>
            <div className="container">
                <div className="row">
                    {posts.map((post)=>(
                        <div className="col">
                            <AppCard
                            image={post.image}
                            title={post.title}
                            content={post.content}
                            />
                        </div>    
                        ))    
                    }
                    
                </div>            
            </div>
        </main>
    )
}

export default AppMain 