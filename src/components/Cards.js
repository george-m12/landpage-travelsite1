import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Kerala Must-Do's</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src='./images/img-9.JPG'
                        text="Treat yourself to divinity at Lakeside Resorts in Thrissur"
                        label="Retreat"
                        path='/services'/>
                        <CardItem src='./images/img-7.JPG'
                        text="Enjoy Varkala with a breathtaking view of the Varkala Beach from your own glasshouse"
                        label="Retreat"
                        path='/services'/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src='./images/img-6.JPG'
                        text="Walk through the golden brown sands of Kozhikode Beach sipping a Suleimani, with love"
                        label="Escape"
                        path='/services'/>
                        <CardItem src='./images/img-2.JPG'
                        text="Wade through the famous backwaters in an atmosphere unique to Alappuzha"
                        label="Escape"
                        path='/services'/>
                        <CardItem src='./images/img-8.JPG'
                        text="Nothing sure beats the thrill offered by the Nehru Trophy Snakeboat Race"
                        label="Escape"
                        path='/services'/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src='./images/img-1.JPG'
                        text="Do visit the nice people at the capital and feel more at home"
                        label="Cityscape"
                        path='/services'/>
                        <CardItem src='./images/img-3.JPG'
                        text="Oh, the sounds we hear here at the Thrissur Pooram are just simply a life experience"
                        label="Cityscape"
                        path='/services'/>
                        <CardItem src='./images/img-4.JPG'
                        text="Chilly mornings and lush greenery. Munnar makes you go gaga!"
                        label="Cityscape"
                        path='/services'/>
                        <CardItem src='./images/img-5.JPG'
                        text="Although the name isn't Indian-sounding, the Chinese Fishing Nets are surely the pride of Kochi"
                        label="Cityscape"
                        path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
