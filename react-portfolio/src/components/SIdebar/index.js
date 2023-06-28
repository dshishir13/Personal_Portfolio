import './index.scss';
import { Link } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img sec={LogoS} alt='logo'/>
            <img sec={LogoSubtitle} alt='slobodan'/>
        </Link>
    </div>
)

export default Sidebar;