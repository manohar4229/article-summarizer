import DeveloperCard from '../components/DeveloperCard';
import manoharImage from '../assets/manohar.jpg';
import viswaImage from '../assets/viswa.jpg';
import vaibhavImage from '../assets/v2.jpg';
import kishoreImage from '../assets/kishore.jpg';
import sharikirfanImage from '../assets/irafan.jpg';

const developers = [
  {
    image: manoharImage,
    name: 'Kota Manohar',
    job: 'Computer Science Engineer'
  },
  {
    image: viswaImage,
    name: 'Teki Viswgna Bramha',
    job: 'Computer Science Engineer'
  },
  {
    image: vaibhavImage,
    name: 'Gurram Naga Vaibhav',
    job: 'Computer Science Engineer'
  },
  {
    image: kishoreImage,
    name: 'Yalamaddi Kishore Babu',
    job: 'Computer Science Engineer'
  },
  {
    image: sharikirfanImage,
    name: 'Shaik Irfan',
    job: 'Computer Science Engineer'
  }
];

const DevelopersPage = () => {
  return (
    <div className="container  mx-auto p-4">
      <h1 className="head_text text-center mb-8 orange_gradient">Our Developers</h1>
      <div className="flex flex-wrap justify-center items-center gap-4 max-sm:flex-col">
        {developers.map((developer, index) => (
          <DeveloperCard
            key={index}
            image={developer.image}
            name={developer.name}
            job={developer.job}
            
          />
        ))}
      </div>
    </div>
  );
};

export default DevelopersPage;
