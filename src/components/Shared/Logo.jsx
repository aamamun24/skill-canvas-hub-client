import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png';

const Logo = () => {
    return (
        <>
            <Link to='/'><img className="w-40" src={logo} alt="" /></Link>
        </>
    );
};

export default Logo;