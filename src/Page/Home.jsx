import { useLoaderData, useNavigate } from "react-router-dom";
import book1 from "../assets/img/book1.jpg";
import BooksListhome from "../component/BooksListhome";

const Home = () => {

const books = useLoaderData()
const navigate = useNavigate()
const handlerClick = () => {
  navigate("/booklist") 
}

  
  return (
    <div className="mt-12">
      {/* Banner section start */}
      <div className="container mx-auto bg-[#1313130D] rounded-3xl">
        <div className="flex justify-center items-center h-[550px]">
          <div className="flex justify-between w-full px-28 py-20">
            <div>
              <h1 className="text-6xl font-bold leading-[84px]">
                Books to freshen <br /> up your bookshelf
              </h1>
              <button onClick={() => handlerClick()} className="btn mt-12 bg-[#23BE0A] hover:bg-[#23BE0A] font-bold text-xl text-white">
                View The List
              </button>
            </div>
            <div>
              <img src={book1} className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 grid grid-cols-3 gap-6">
        {books.map((book) => (
          <BooksListhome key={book.id} book={book}></BooksListhome>
        ))}
      </div>
    
    </div>
  );
};

export default Home;
