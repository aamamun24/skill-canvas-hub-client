import Container from "../../components/Shared/Container/Container";
import banner from '../../assets/Banner/banner.png';
import Button from "../../components/Button/Button";
import Description from "../../components/Shared/Description";

const Banner = () => {
    return (
        <div className='bg-[#FDF8EE]'>
            <Container>
                <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-20 pb-10">
                    <div>
                        <h1 className="text-4xl lg:text-6xl text-[#050C26] font-bold mb-4">
                            The <span className="text-[#FF7426]">Smart</span> <br />
                            Choice For <span className="text-[#FF7426]">Future</span>
                        </h1>
                        <Description description="Grow up your skills by online courses with Skill Canvas Hub" />
                        <div className="mt-4">
                            <Button text="Explore" />
                        </div>
                    </div>
                    <div>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;