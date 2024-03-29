import { useEffect, useState } from "react";
import ReChart from "../component/ReChart";
import { readGetData } from "../Storage/Read";





const Page = () => {
  
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storageRead = readGetData()
    setBooks(storageRead)
  } ,[])
  


  return (
    <div className="container mx-auto flex justify-center items-center mt-24">
      {
        books.map(book => <ReChart key={book.id} book={book}></ReChart>)
      }
    

    </div>
  );
};


export default Page;
