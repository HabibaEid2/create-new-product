import{useState} from 'react'
export default function MainContent() {
    let arrOfProducts = [
        {
            titleOne:"Product One" ,
            titleTwo : "One"

        } , 
        {
            titleOne:"Product Two" ,
            titleTwo: "Two" ,

        } , 
        {
            titleOne:"Product Three" ,
            titleTwo : "Three" ,

        } 
        
    ]
    
    let result ; 

    const [intialValue , newProduct] = useState(arrOfProducts , result)
    function check(ele) {
        ele.preventDefault()
       
        result = {
            titleOne:ele.target.elements.titleOne.value , 
            titleTwo:ele.target.elements.titleTwo.value , 
        }
        //intialValue.push(result)
        newProduct(intialValue => intialValue.concat(result))
       
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
                <button type="submit" className="btn btn-warning" style={{width:"fit-content"}}>Create</button>
                </div>
            </form>
            <div className="patentOfContent" style={{display:"flex" , justifyContent:"center" , gap:"20px" , margin: "30px 0" , flexWrap:"wrap"}}>

            {intialValue.map((ele) => {
                return (
                    
                <div class="card" style={{width: "18rem"}}>
                    <img src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{ele.titleOne}</h5>
                        <h3 style={{color:"#777" , fontSize:'13px'}}>{ele.titleTwo}</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-danger">Get It</a>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
    )
}