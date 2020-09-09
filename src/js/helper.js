
const spread = (str) => {
    if (!str)
        return str
    let split = str.split(" ")
    let result = ''
    split.forEach(word => {
        result += word + '%20'
    })
    result = result.slice(0, -3);
    return result;

}
 function queryBuilder(data) {
    let query = ''

    if (data.title) {
        query +='+intitle:'+ spread(data.title)
    }
    if (data.author) {
        query += '+inauthor:' + spread(data.author)
    }
    if (data.bookPublisher) {
        query += '+inpublisher:' + spread(data.publisher)
    }
    console.log(query)
    return query.trim()

}

export default queryBuilder
