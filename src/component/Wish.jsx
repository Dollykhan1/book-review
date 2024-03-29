import { useEffect, useState } from "react";
import { wishGetData } from "../Storage/Wish";
import WishTab from "./WishTab";


const Wish = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storageData = wishGetData();
    setBooks(storageData);
  }, []);
  return (
    <div>
      {books.map((book) => (
        <WishTab key={book.id} book={book}></WishTab>
      ))}
    </div>
  );
};

export default Wish;
