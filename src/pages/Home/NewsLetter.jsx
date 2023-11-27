import Container from '../../components/Shared/Container/Container';

const NewsLetter = () => {
    return (
        <div className="bg-white py-12">
            <Container>
                <div className="bg-[#4D2C5E] max-w-5xl mx-auto p-10 rounded-md text-white text-center">
                    <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                    <p className="mb-6">
                        Stay updated with the latest courses, events, and educational content.
                    </p>

                    <div className="flex items-center justify-center">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-1/2 py-2 px-6 text-[#8A8A8A] rounded-l-full focus:outline-none"
                        />
                        <button className="bg-[#FF7426] font-medium uppercase px-6 py-2 text-white rounded-r-full">Subscribe</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NewsLetter;