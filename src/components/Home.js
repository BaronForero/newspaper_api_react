import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";

const Home = () => {

    //useState
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState(false);
    const [input, setInput] = useState("")


    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=${input ? input : "bitcoin"}&from=2023-03-18&sortBy=publishedAt&apiKey=c274f72077ee497f9e5f081ba10725cd`)
        .then(res => res.json())
        .then(json => {
            console.log("News data received:", json);
        setNews(json.articles);
        });
    }, [search]);

    return (
        <section>
            <h1 className="headline">BBFC NEWS</h1>
        <form>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search News"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                /> 
                
                <input
                    type="button"
                    value="search"
                    onClick={() => setSearch(!search)}    
                />    
        </form>
        
            <section className="newsItem_grid">
                {news.map((elt, index) => {
                    return (
                        <NewsItem
                            id={index}
                            author={elt.author}
                            title={elt.title}
                            img={elt.urlToImage}
                            content={elt.content}
                            description={elt.description}
                            published={elt.published}
                        />
                    )
                })}
            </section>
            
    </section>
    );
};

export default Home;
