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

                    {posts.map((post) => (
                        // post.published &&
                        <div key={post.id} className="col">
                            <AppCard
                                image={post.image}
                                title={post.title}
                                content={post.content}
                                tags={post.tags} 
                            />

                            {/* <AppCard
                                post={post}
                            /> */}
                        </div>
                    ))
                    }

                </div>
            </div>
        </main>
    )
}

export default AppMain 