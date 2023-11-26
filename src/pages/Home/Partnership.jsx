import Container from "../../components/Shared/Container/Container";
import Description from "../../components/Shared/Description";

const Partnership = () => {
    return (
        <section className="bg-white my-16">
            <Container>
                <div className="text-center my-6">
                    <h2 className="text-5xl font-semibold mb-2">Our Partners</h2>
                    <Description description='Over 100 Universities and Companies Collaborates with Us' />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Partner 1 */}
                    <div className="flex items-center justify-center">
                        <img src="/path/to/partner1-logo.png" alt="Partner 1" className="max-w-full h-auto" />
                    </div>
                    <p className="text-sm text-center text-gray-600">Brief description of the partnership with Partner 1.</p>

                    {/* Partner 2 */}
                    <div className="flex items-center justify-center">
                        <img src="/path/to/partner2-logo.png" alt="Partner 2" className="max-w-full h-auto" />
                    </div>
                    <p className="text-sm text-center text-gray-600">Brief description of the partnership with Partner 2.</p>

                    {/* Add more partners as needed */}
                </div>
            </Container>
        </section>
    );
};

export default Partnership;