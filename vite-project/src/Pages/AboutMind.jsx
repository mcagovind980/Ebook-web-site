function Mind()
{
return(
    <div className="container">

        <div className="card">

{ books.map((book)=>
(
<div className="item" key={book.id}>
<img src={book.image} alt={book.title}/>
<h3>{ book.title}</h3>
<a href={book.viewLink} target="_blank" rel="noopener noreferrer"/>
</div>

)

)}
 </div>
    </div>
)

}
export default Mind