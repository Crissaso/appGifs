

const GifCards = ({ title, url }) => {
  return (
    <div className="ml-16 rounded-md ">  
        <div className=" bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-4 w-100% h-4/5">
                <span 
                    className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">       {title}
                </span>
                <img
                    className="w-full h-full object-cover rounded-lg" 
                    src={url} 
                    alt="charater" 
                />
            </figure>
        </div>
  </div>
 
  )
}

export default GifCards
