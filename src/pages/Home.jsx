import React from 'react';
import Banner from '../components/Banner';
// import PopularGames from '../components/PopularGames';
import { useLoaderData } from 'react-router';
import NewsLetter from '../components/NewsLetter';
import Headlines from '../components/Headlines';
import RecentDisasters from '../components/RecentDisasters';

const Home = () => {
  
    
    return (
        <div>
            <title>Home</title>
           <Banner/>
           {/* <Headlines disasters={disasters}/> */}
           {/* <PopularGames disasters={disasters}/> */}
           <RecentDisasters/>
           <NewsLetter/>
        </div>
    );
};

export default Home;