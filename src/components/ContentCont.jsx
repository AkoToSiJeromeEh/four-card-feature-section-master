import PropTypes from "prop-types";

export const ContentCont = ({ title, content, icon, color }) => {
  return (
    <div className={` p-6 rounded-md relative flex flex-col  w-fit content-cont text-white hover:bg-white   hover:text-black transition-colors duration-700  ease-in-out cursor-pointer     `}>
	<div className={`${color} w-full  absolute left-0 right-0 top-0 rounded-[0.380rem]  h-[0.9rem] border-t-[0.20rem]  `}></div>
      <div className="">
        <h1 className=" text-lg font-semibold text-primary-blue">{title}</h1>
        <p className="  text-sm mt-2 max-w-[32ch] m-auto  ">{content}</p>
      </div>
      <figure className=" self-end mt-12 hover:animate-bounce ">
        <img src={icon} alt="icon" />
      </figure>
    </div>
  );
};

ContentCont.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
};
