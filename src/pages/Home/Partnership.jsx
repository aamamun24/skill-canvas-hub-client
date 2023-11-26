import Container from "../../components/Shared/Container/Container";
import Description from "../../components/Shared/Description";
import partnership1 from '../../assets/Partnership/1.png';
import partnership2 from '../../assets/Partnership/2.png';
import partnership3 from '../../assets/Partnership/3.png';
import partnership4 from '../../assets/Partnership/4.png';
import partnership5 from '../../assets/Partnership/5.png';
import partnership6 from '../../assets/Partnership/6.png';

const Partnership = () => {
    return (
        <section className="bg-white my-16">
            <Container>
                <div className="text-center my-6">
                    <h2 className="text-5xl font-semibold mb-2">Our Partners</h2>
                    <Description description='Over 100 Universities and Companies Collaborates with Us' />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    <div>
                       <img className="w-36" src={partnership1} alt="" />
                    </div>
                    <div>
                       <img className="w-36" src={partnership2} alt="" />
                    </div>
                    <div>
                       <img className="w-36" src={partnership3} alt="" />
                    </div>
                    <div>
                       <img className="w-36" src={partnership4} alt="" />
                    </div>
                    <div>
                       <img className="w-36" src={partnership5} alt="" />
                    </div>
                    <div>
                       <img className="w-36" src={partnership6} alt="" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Partnership;