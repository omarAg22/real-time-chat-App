import MessageContent from '../../components/messages/MessageContent';
import Sidebar from '../../components/sidbar/Sidebar';

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContent />
    </div>
  );
};

export default Home;
