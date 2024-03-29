import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";

const ReadTab = ({ book }) => {
  const {
    img,
    book_title,
    writer_name,
    number_of_pages,
    year_of_publishing,
    publisher,
    genre,
    identity,
    rating,
  } = book;
  console.log(book);

  return (
    <div className="h-72 w-full border border-[#13131326] rounded-2xl mt-8 p-6 flex gap-6">
      <figure className="w-60 h-60 bg-[#1313130D] rounded-2xl flex justify-center items-center">
        <img src={img} alt="" />
      </figure>
      <div className="flex-1">
        <h2 className="text-2xl font-bold">{book_title}</h2>
        <p className="mt-4 font-medium">By : {writer_name}</p>
        <div className="flex gap-5 text-[#23BE0A] py-4 items-center">
          <p className="font-bold text-black">Tag</p>
          <p className="bg-[#23BE0A0D] rounded-[30px] py-2 px-4">#{genre}</p>
          <p className="bg-[#23BE0A0D] rounded-[30px] py-2 px-4">#{identity}</p>
          <div className="text-[#131313CC] py-2 px-4 flex items-center gap-3">
            <CiLocationOn />
            <p>Year of Publishin : {year_of_publishing}  </p>
          </div>
        </div>
        <div className="flex gap-6 text-[#13131399]">
            <div className='flex items-center gap-3'> 
                <IoPeopleSharp />
                <p> Publisher: {publisher}</p> 
            </div>
            <div className='flex items-center gap-3'>
                <MdOutlineContactPage />
                <p>Page {number_of_pages}</p>
            </div>
        </div>
        <hr className="mt-4 w-full" />
        <div className="mt-4 space-x-5">
            <button className="btn bg-[#328EFF26] hover:bg-[#328EFF26] text-[#328EFF] rounded-[30px] px-8">Category: Classic</button>
            <button className="btn bg-[#FFAC3326] hover:bg-[#FFAC3326] text-[#FFAC33] rounded-[30px] px-8">Rating: {rating}</button>
            <button className="btn bg-[#23BE0A] hover:bg-[#23BE0A] text-white rounded-[30px]  px-8">View Details</button>
        </div>
      </div>
    </div>
  );
};


ReadTab.propTypes = {
    book: PropTypes
  };

export default ReadTab;