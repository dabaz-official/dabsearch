import Image from 'next/image'

function Avatar({ url, className }) {
  return (
      <Image 
        loading='lazy' 
        className={`h-10 rounded-xl cursor-pointer transition duration-300 transform hover:opacity-80 ${className}`}
        width={50}
        height={50}
        src={url} 
        alt='profile pic'
      />
  );
}

export default Avatar;