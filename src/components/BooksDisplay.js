import React from "react";
import BookCard from "./BookCard";

function BooksDisplay(props) {
    const books=props.books

    if(books.length===0){
        return(
            <div>How empty here let's look for some good books</div>
        )
    }
    else{
        return (
            <div className='Books'>
                {
                    books.map(book=>{
                        return <BookCard key={book["id"]}
                                         snippet={book["volumeInfo"]["description"]}
                                         title={book["volumeInfo"]["title"]}
                                         authors={book["volumeInfo"]["authors"]}
                                         rating={book["volumeInfo"]["averageRating"]}
                                         categories={book["volumeInfo"]["categories"]}
                                         language={book["volumeInfo"]['language']}
                                         pages={book['volumeInfo']['pageCount']}
                                         publisher={book['volumeInfo']['publisher']}
                                         date={book['volumeInfo']['publishedDate']}
                        />

                    })
                }
            </div>
        )
    }
}

export default BooksDisplay
