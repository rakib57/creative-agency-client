import React from 'react';
import Header from '../Header/Header';
import ImageColumn from '../ImageColumn/ImageColomn';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import FeedBack from '../FeedBack/FeedBack'
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ImageColumn></ImageColumn>
            <Services></Services>
            <Slider></Slider>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;