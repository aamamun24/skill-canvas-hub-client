import Achievement from "./Achievement";
import Banner from "./Banner";
import Feedback from "./Feedback";
import Instructor from "./Instructor";
import NewsLetter from "./NewsLetter";
import Partnership from "./Partnership";
import PopularCourses from "./PopularCourses";
import SignUpFree from "./SignUpFree";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Partnership/>
            <PopularCourses/>
            <Feedback/>
            <Achievement/>
            <Instructor/>
            <SignUpFree/>
            <NewsLetter/>
        </div>
    );
};

export default Home;