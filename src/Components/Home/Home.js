import { React } from 'react';
import './Home.css';
import HomeFirstSection from './HomeFirstSection';
import HomeSecondsection from './HomeSecondSection';
import HomeThirdSection from './HomeThirdSection';
import HomeFourthSection from './HomeFourthSection';
import HomeFivethSection from './HomeFivethSection';
import HomeSixthSection from './HomeSixthSection';
import HomeSeventhSection from './HomeSeventhSection';
import HomeEithSection from './HomeEithSection';

export default function Home() {
    return(
        <div className='home'>
            <HomeFirstSection/>
            <HomeSecondsection/>
            <HomeThirdSection/>
            <HomeFourthSection/>
            <HomeFivethSection/>
            <HomeSixthSection/>
            <HomeSeventhSection/>
            <HomeEithSection/>
        </div>
    )
}