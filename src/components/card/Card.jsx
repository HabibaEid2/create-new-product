import './card.css'
export default function Card(props) {
    return (
    <div className="card" style={{width: "18rem"}}>
        <img src={props.img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.titleOne}</h5>
            <h3>{props.titleTwo}</h3>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    )
}