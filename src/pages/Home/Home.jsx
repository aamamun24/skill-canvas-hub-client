import Achievement from "./Achievement";
import Banner from "./Banner";
import Feedback from "./Feedback";
import Instructor from "./Instructor";
import Partnership from "./Partnership";
import PopularCourses from "./PopularCourses";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Partnership/>
            <PopularCourses/>
            <Feedback/>
            <Achievement/>
            <Instructor/>
        </div>
    );
};

export default Home;