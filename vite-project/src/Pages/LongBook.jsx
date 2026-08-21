import LongBook from "../Data/LongBook1"
function LongBook()
{
    return (
<div className="container">
<div className="card">
{books.map((books)=>
    (
   <div className="item" key={books.id}>
    <img src={books.image} alt={title}/>
    <h3>{books.title}</h3>
<a href={books.viewLink}
target="_blank">
    View Pdf
</a>
</div>

))}




</div>

</div>





    )
}
export default LongBook()