import { useEffect, useState } from "react";
import { readGetData } from "../Storage/Read";
import ReadTab from "./ReadTab";




const Read = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        const storageData = readGetData();
        setBooks(storageData)
    } ,[])
    return (
        <div>
            {
                books.map(book => <ReadTab key={book.id} book={book}></ReadTab>)
            }
        </div>
    );
};

export default Read;