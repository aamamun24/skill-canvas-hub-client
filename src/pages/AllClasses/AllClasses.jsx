import ClassCard from "../../components/Card/ClassCard";
import Container from "../../components/Shared/Container/Container";
import SectionTitle from "../../components/Shared/SectionTitle";
import classBanner from '../../assets/class-banner.png';
import useAcceptedClass from "../../hooks/useAcceptedClass";

const AllClasses = () => {
    const [classes] = useAcceptedClass()
    return (
        <div>
            <div className='bg-[#6176F7]'>
                <Container>
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-10 pb-5 md:pb-0">
                        <div className="md:w-1/2">
                            <h1 className="text-2xl md:text-4xl text-[#050C26] text-center md:text-start font-bold mt-4 md:mt-0">
                                Access To <span className="text-[#FF7426]">5000+</span> Courses from <span className="text-[#FF7426]">300</span> Instructors & Institutions
                            </h1>
                        </div>
                        <div className="md:w-1/2">
                            <img src={classBanner} alt="" />
                        </div>
                    </div>
                </Container>
            </div>
            <div className='bg-[#FDF8EE] py-16'>
                <Container>
                    <div className='text-center mb-16'>
                        <SectionTitle text="All" colorText="Classes" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            classes.map(item => <ClassCard
                                key={item._id}
                                title={item.title}
                                short_description={item.short_description}
                                total_enrollment={item.total_enrollment}
                                price={item.price}
                                name={item.name}
                                image={item.image}
                                _id={item._id}
                            ></ClassCard>)
                        }
                    </div>
                </Container>
            </div>
        </div >
    );
};

export default AllClasses;