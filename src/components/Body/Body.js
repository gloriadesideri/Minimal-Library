import React, {useEffect, useState, useReducer} from "react";

import axios from 'axios';
import BooksDisplay from "../BooksDisplay/BooksDisplay";
import { Button, Container, Row, Col, Form, FormGroup, FormInput  } from "shards-react";
import  queryBuilder  from "../../js/helper";
import style from './body.module.css'

const initialState={
    title:'',
    author:'',
    publisher:''
}

function reducer(state,{field, value}){
    return{
        ...state,
        [field]:value
    }
}
function Body() {
    const [state,dispatch]=useReducer(reducer,initialState);
    const [books,setBooks]=useState([]);
    const [query,setQuery]=useState('');
    const [message,setMessage]=useState("How empty, let's look for some books")
    const [index,setIndex]=useState(0);
    const [remaining, setRemaining]=useState(0);

    const handleSubmit = e => {
        e.preventDefault()
        console.log(state)
        setQuery(queryBuilder(state))

    }

    useEffect(()=>{
        handleRequest();
    },[query])


    const onChange=e=>{
        dispatch({field:e.target.name,value:e.target.value})
    }
    const {title,author,publisher}=state;

    const handleRequest = async () => {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&orderBy=relevance&startIndex=${index}`).then(response=>{
            console.log(response.data)
            if (response.data.totalItems === 0)
                {setMessage("your search produced 0 results sorry")
                setBooks([]);}
            else
            {setBooks(books.concat(response.data.items))
                setRemaining(response.data.totalItems-40)
                setMessage("your search produced " +response.data.totalItems+" results");
                 setIndex(index+40);
            }
        }).catch(e=>{
            console.log(e.message);
        })
    }
    const loadMore= async()=>{
        if(remaining>0){

            setIndex(index+40)
            console.log(index);
            console.log(remaining)
            handleRequest()
        }
    }





    return (
        <div className="Body">
            <Container className={style.FormContainer}>

                <Form onSubmit={handleSubmit}>
                    <Row className={'topBar'}>
                        <Col>
                            <FormGroup>
                                <FormInput id={'bookTitle'} name={'title'}   placeholder={'title'} value={title} onChange={onChange}/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <FormInput id={'bookAuthor'} name={'author'} value={author} onChange={onChange} placeholder={'author'}/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <FormInput id={'bookPublisher'} name={'publisher'} value={publisher} onChange={onChange}
                                           placeholder={'publisher'}/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <Button outline theme='primary' type={'submit'}>Submit</Button>
                        </Col>
                    </Row>

                </Form>
            </Container>
                <BooksDisplay books={books} message={message} />
            <Button className={remaining>0 ? '': style.hidden} outline onClick={loadMore}>Load more</Button>


        </div>

    );
}

export default Body
