import instructor from '../../assets/Instructor.png';
import Button from '../../components/Button/Button';
import Container from '../../components/Shared/Container/Container';

const Instructor = () => {
    return (
        <div className='bg-white my-16'>
            <Container>
                <div className='flex flex-col md:flex-row gap-6 items-center'>
                    <div>
                        <img className='rounded-md' src={instructor} alt="" />
                    </div>
                    <div>
                        <h2 className='text-2xl md:text-5xl font-semibold'>Become an Instructor</h2>
                        <p className='text-[#8A8A8A] my-4'>Create best selling courses and get to mentor students to become professionals from around the world.</p>
                        <Button text="start teaching" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Instructor;