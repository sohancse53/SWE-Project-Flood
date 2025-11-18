import React from 'react';
import Banner from '../components/Banner';
// import PopularGames from '../components/PopularGames';
import { useLoaderData, useNavigation } from 'react-router';
import NewsLetter from '../components/NewsLetter';
import Headlines from '../components/Headlines';
import RecentDisasters from '../components/RecentDisasters';
import LoadingSpinner from '../components/LoadingSpinner';


const Home = () => {
    const navigation = useNavigation()
    const data = useLoaderData();
    const events = data.events;
    const latest = []
    events.forEach(event => {
        latest.push(event.title);
    });
    
    console.log(latest);
    
    
    return (<>
      {
        navigation.state === 'loading'?<LoadingSpinner/>:
          <div>
            <title>Home</title>
           <Headlines latest={latest}/>
           <Banner/>
           
           <RecentDisasters/>
           <NewsLetter/>
        
        </div>
      }
      </>
    );
};

export default Home;