const DeveloperCard = ({ image, name, job }) => {
  return (
    <div className='flex container justify-center items-center flex-col bg-white p-4 rounded-lg shadow-lg max-w-xs'>
      <img
        src={image}
        alt={name}
        className='rounded-full object-cover w-[100px] h-[100px]'
      />
      <h3 className='mt-4 text-2xl font-bold text-center'>{name}</h3>
      <p className='mt-2 text-gray-600 text-center'>{job}</p>
    </div>
  );
};

export default DeveloperCard;
