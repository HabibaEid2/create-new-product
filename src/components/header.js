export default function Header() {
    let aStyle = {
        color: "white" , 
        padding : "15px 20px" , 
        textDecoration : "none" , 
        display : "inline-block"
    }
    return (
        <div style={{backgroundColor:"black"}}>
            <ul style={{listStyle:"none" , display:"flex"}} >
                <li><a href="" style={aStyle}>Home</a></li>
                <li><a href="" style={aStyle}>About</a></li>
                <li><a href="" style={aStyle}>Content</a></li>
                <li><a href="" style={aStyle}>Contact</a></li>
            </ul>
        </div>
    )
}