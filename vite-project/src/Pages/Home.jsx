// import { Link } from "react-router-dom";
import books from "../Data/Home1"

function Pages()
{
    return(
 <div className="container">
<div className="card">
    {books.map((book)=>
    (

  <div className="title" key={book.id}>
    <img src={book.image} alt={book.title}/>
    <h3>{book.title}</h3>
    <a href={book.path} > View Pages</a>
</div>
   )
    
    )}
    </div>
    </div>

    )
}
export default Pages