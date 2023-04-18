import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const NewsDetails = () => {

    const [news, setNews] = useState([])
    const blogParams = useParams()
    
    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-03-18&sortBy=publishedAt&apiKey=c274f72077ee497f9e5f081ba10725cd`)
        .then(res => res.json())
        .then(json => {
            console.log("News data received:", json);
        setNews(json.articles);
        });
    }, []);

    const detailsNews = news.filter((elt, index) => {
        return index.toString() === blogParams.id
    })

    console.log(detailsNews);
    
    return (
        <div>
            {detailsNews.map((elt) => {
                return (
                    <div>
                        <p>{elt.title}</p>
                        <p>{elt.content}</p>
                    </div>
                
                        
                    )
                })}
        </div>
    );
}

export default NewsDetails;