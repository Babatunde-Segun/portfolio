// next image
import Image from "next/image";


const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatar.png"}
        width={500}
        height={100}
        alt="avatarpicture "
        className="translate-z-0  max-w-[300]"
      />
    </div>
  );
};

export default Avatar;
