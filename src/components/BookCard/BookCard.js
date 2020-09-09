import React from "react";
import {Button, Card, CardBody, CardHeader, CardImg, CardSubtitle, CardTitle} from "shards-react";

const BookCard=(props)=> {

    function normalizeAuthors(arr) {
        if(!arr)
        {
            arr=['no authors']
        }
        return arr;
    }
    return(
        <Card  style={{maxWidth:'300px'}}>
            <CardHeader>
                <CardTitle>{props.data.title}</CardTitle>
                <CardSubtitle>{normalizeAuthors(props.data.authors)}</CardSubtitle>
            </CardHeader>
            <CardBody>
                <CardImg src={props.data.imageLinks ? props.data.imageLinks.smallThumbnail :'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F11%2FBlue_question_mark_icon.svg%2F1200px-Blue_question_mark_icon.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ABlue_question_mark_icon.svg&tbnid=30jp6iQvRWVW6M&vet=12ahUKEwiPx8Prz73qAhXPi6QKHfkwB4cQMygAegUIARDdAQ..i&docid=o8SQ9YB0OSSLYM&w=1200&h=1200&q=question%20mark%20icon&ved=2ahUKEwiPx8Prz73qAhXPi6QKHfkwB4cQMygAegUIARDdAQ'}/>
                <Button outline onClick={props.clicked}>Learn More</Button>
            </CardBody>
        </Card>
    )
}

export default BookCard
