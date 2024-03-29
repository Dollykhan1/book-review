
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BooksListhome = ({ book }) => {
  console.log (book)

  const { id, identity, img, book_title, writer_name, rating, genre, custom } = book;

  return (
    <Link to={`/book/${id}`}>
      <div className="w-80 lg:w-full p-6 rounded-2xl border border-[#13131326] space-y-6">
        <figure className="bg-[#F3F3F3] h-56 rounded-2xl flex justify-center items-center">
          <img src={img} alt="" className=" w-[full] h-40" />
        </figure>
        <div className="space-y-4">
          <div className="flex items-center gap-10 text-[#23BE0A] font-medium">
            <p className="bg-[#23BE0A0D] rounded-[30px] py-2 px-4">#{genre}</p>
            <p className="bg-[#23BE0A0D] rounded-[30px] py-2 px-4">
              #{identity}
            </p>
          </div>
          <h2 className="text-2xl font-bold">{book_title}</h2>
          <p className="font-medium text-[#131313CC]">{writer_name}</p>
          <div className="flex items-center justify-between text-[#131313CC] font-medium pt-6 border-t border-dashed">
            <p>{custom}</p>
            <p className="flex items-center gap-2">
              <CiStar /> {rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BooksListhome;