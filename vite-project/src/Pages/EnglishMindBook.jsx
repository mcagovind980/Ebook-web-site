import books from "../Data/EnglishMind";
function English()
{
    return(
        <div className="container">
        <div className="card">
{books.map((book)=>(
<div className="item" key={book.id}>
<img src={book.image} alt={book.title}/>
<h3>{book.title}</h3>
</div>

))}


        </div>
 </div>
    )
}
export default English