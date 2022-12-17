import { Link } from "react-router-dom"

const Card = ({data}) => {
	return(
		<Link className="card_wrap" to={`/detail/${data.id}`} >
			<div className="card_title">{data.title}</div>
			<div className="card_author">By {data.author}</div> 
			<div className="card_description">{data.description}</div> 
			<div className="more">See more...</div>
		</Link>
	)
}

export default Card