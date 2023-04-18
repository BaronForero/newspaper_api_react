import { Link } from "react-router-dom";

const NewsItem = (props) => {
    return (
        <div className="newsDiv">
            
            <h2>{props.title}</h2>
            <img src={props.img} alt="" />
            <p>{props.content}</p>
            <p>{props.description}</p>
            <span>{props.published}</span>
            <h3>{props.author}</h3>
            <Link to={`./${props.id}`}>Read more</Link>   
        </div>
    );
}

export default NewsItem;