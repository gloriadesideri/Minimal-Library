import React from "react";

const BookCard=(props)=>{
    return(
        <div className={'card'}>
            {/*<img src={src}/>*/}
            <strong className={'book-title'}>Title: {props.title}</strong>
            <p>Authors: {props.authors.map(author=>{
                return author
            })}</p>
            <button>Learn more</button>
        </div>
    )
}

export default BookCard
