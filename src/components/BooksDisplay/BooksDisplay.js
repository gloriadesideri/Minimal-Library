import React, {useState} from "react";
import style from './booksdisplay.module.css'
import BookCard from "../BookCard/BookCard";

function BooksDisplay(props) {

    const [selectedBook,setSelectedBook]=useState([])
    const handleClick = (book) => {
        // save this book in the state

        console.log(book)
        setSelectedBook(book.volumeInfo);
    };

    const books=props.books
    if(books.length===0){
        return(
            <div>{props.message}</div>
        )
    }
    else{
        return (

            <div className='Books'>
                <div>{props.message}</div>
                {
                    books.map(book=>{
                        return (

                            <BookCard data={book.volumeInfo} clicked={() => handleClick(book)}/>

                        )
                    })

                }
            </div>
        )
    }
}

export default BooksDisplay
