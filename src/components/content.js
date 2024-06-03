import{useState} from 'react'
import Card from './card/Card';
export default function MainContent() {
    let arrOfProducts = [
        {
            img : "https://images.pexels.com/photos/22475982/pexels-photo-22475982/free-photo-of-historic-stone-house-with-a-roof-overgrown-with-grass-in-an-icelandic-fjord.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" ,
            titleOne:"Product One" ,
            titleTwo : "One"

        } , 
        {
            img : "https://images.pexels.com/photos/24771857/pexels-photo-24771857.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" ,
            titleOne:"Product Two" ,
            titleTwo: "Two" ,

        } , 
        {
            img : "https://images.pexels.com/photos/22033741/pexels-photo-22033741/free-photo-of-cadiz.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" ,
            titleOne:"Product Three" ,
            titleTwo : "Three" ,

        } 
        
    ]
    const [products , newProduct] = useState(arrOfProducts)
    let result ; 

    function check(ele) {
        ele.preventDefault()
        result = {
            img : "https://images.pexels.com/photos/22941535/pexels-photo-22941535/free-photo-of-pinky-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" ,
            titleOne:ele.target.elements.titleOne.value , 
            titleTwo:ele.target.elements.titleTwo.value , 
        }
        newProduct(products => [...products , result])
    }
    return (
        <div className="container">
            <form onSubmit={check}>
                <div className="row">
                <div className="col">
                    <input name = "titleOne"type="text" className="form-control" placeholder="First Title" aria-label="First name"/>
                </div>
                <div className="col">
                    <input name = "titleTwo"type="text" className="form-control" placeholder="Seconde Title" aria-label="Last name"/>
                </div>
                <div className="col">
                    <input name = "img" type="text" className="form-control" placeholder="image url" aria-label="img"/>
                </div>
                <button type="submit" className="btn btn-warning" style={{width:"fit-content"}}>Create</button>
                </div>
            </form>
            <div className="patentOfContent" style={{display:"flex" , justifyContent:"center" , gap:"20px" , margin: "30px 0" , flexWrap:"wrap"}}>

            {products.map((ele) => {
                return (
                <Card
                img = {ele.img}
                titleOne = {ele.titleOne}
                titleTwo = {ele.titleTwo}
                />
                )
            })}
            </div>
        </div>
    )
}