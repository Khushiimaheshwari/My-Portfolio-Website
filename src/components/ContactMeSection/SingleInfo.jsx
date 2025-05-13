const SingleInfo = ({ text, Image }) => {
    return (
      <div className="flex gap-4 items-center justify-start sm:scale-90 md:scale-100">
        <Image className="text-3xl" />
        <p>{text}</p>
      </div>
    );
  };
  
  export default SingleInfo;
  