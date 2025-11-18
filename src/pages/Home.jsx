import React from 'react';
import Banner from '../components/Banner';
// import PopularGames from '../components/PopularGames';
import { useLoaderData } from 'react-router';
import NewsLetter from '../components/NewsLetter';
import Headlines from '../components/Headlines';
import RecentDisasters from '../components/RecentDisasters';


const Home = () => {
  
    const data = useLoaderData();
    const events = data.events;
    const latest = []
    events.forEach(event => {
        latest.push(event.title);
    });
    
    console.log(latest);
    
    
    return (
        <div>
            <title>Home</title>
           <Headlines latest={latest}/>
           <Banner/>
           
           <RecentDisasters/>
           <NewsLetter/>
        
        </div>
    );
};

export default Home;