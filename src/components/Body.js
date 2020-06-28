import React,{useEffect,useState} from "react";
import axios from 'axios';
import BooksDisplay from "./BooksDisplay";
import { useForm } from 'react-hook-form'

function Body() {
    const[books,setBooks]=useState([])
    const[query,setQuery]=useState('')
    const {register,handleSubmit,watch,errors}=useForm()

    const onSubmit=data=>{
        console.log(data)
        setQuery(queryBuilder(data))

    }

    useEffect(()=>{
        handleRequest(query)
    },[query])

    const queryBuilder=data=>{
        let query=spread(data.bookTitle)
        if(data.author!==''){
            query+='+inauthor:'+spread(data.author)
        }
        if(data.isbn!==''){
            query+='+inisbn:'+spread(data.isbn)
        }
        if(data.bookPublisher!==''){
            query+='+inpublisher:'+spread(data.bookPublisher)
        }
        console.log(query)
        return query

    }




    //TODO MOVE TO REFRACTORED FILE
    const spread=(str)=>{
        let split=str.split(" ")
        let result=''
        split.forEach(word => {
            result+=word + '%20'
        })
        result = result.slice(0, -3);
        return result;

    }



    //TODO MOVE TO REFRACTORED FILE
    const handleRequest = (researchQuery)=>
    {

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${researchQuery}&maxResults=40&orderBy=relevance`)
            .then(res => {
                console.log(books)

                setBooks(res.data['items'])
            })
    }





    return (
        <div className="Body">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name={'bookTitle'} ref={register} placeholder={'title'}/>
                <input name={'author'} ref={register} placeholder={'author'}/>
                <input name={'isbn'} ref={register} placeholder={'isbn'}/>
                <input name={'bookPublisher'} ref={register} placeholder={'publisher'}/>
                <button type={'submit'}>Submit</button>
            </form>
            <BooksDisplay books={books}/>
        </div>
    );
}

export default Body
