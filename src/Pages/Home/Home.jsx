import Hero from "../../Components/Hero/Hero";
import wave from '/wave.svg'

const Home = () => {
    return (
        <div className="relative">
            <Hero></Hero>
            <img className="absolute bottom-0 w-full" src={wave} alt="" />
            <div></div>
        </div>
    );
};

export default Home;