import './SideBar.scss';
import Pages from './pages/Pages';
import Profile from './profile/Profile';
import UserOptions from './userOptions/UserOptions';
import VerticalBorder from './verticalBorder/VerticalBorder';

export default function SideBar() {
    return (
        <div className="sideBar_main">
            <div className='sideBar_items'>
                <Profile profileName="Anaïs SALMAN" profileRole="Patient" profileImg="https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png" />
                <Pages />
                <UserOptions />
            </div>
            <VerticalBorder height="90%" />
        </div>

    )
};