import React from 'react';
import Banner from './Banner';
import './Home.css';
import Card from './Card';


const Home = () => {
    return (
        <div className="home">
            <Banner />

            <div class="home__section">
                <Card
                    src="https://a0.muscache.com/im/pictures/8e3d5167-55ca-4fbd-832d-e3b66dad54ec.jpg?im_w=480"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts."
                 />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480"
                    title="Unique stays"
                    description="Space that are more that just a place to sleep."
                 />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480"
                    title="Entire Home"
                    description="Comfortable private place with room for friends or family."
                 />
            </div>
            <div class="home__section">
                <Card
                    src="https://a0.muscache.com/im/pictures/92f90705-977e-4287-9648-813302911c8c.jpg?im_w=720"
                    title="Heart of Oldtown"
                    description="Perfect for families this room sleeps 5 comfortably. It features a microwave, mini frig, keurig coffee pot and hot water dispenser for tea."
                    price="$113/ night"
                 />
                <Card
                    src="https://a0.muscache.com/im/pictures/a52ee386-fafb-4f99-b961-9577e32d8640.jpg?im_w=720"
                    title="Entire cabin hosted"
                    description="The cabin is close to town, nestled on 10 acres overlooking the head of the Beluga Slough."
                    price="$150/ night"
                 />
                <Card
                    src="https://a0.muscache.com/im/pictures/03259be3-a274-4f77-8124-a0edd5e2a005.jpg?im_w=720"
                    title="Room in boutique hotel hosted"
                    description="Seafarer Suites is conveniently located with Ocean views in the picturesque Historical Art and Food District of Homer."
                    price="$249/ night
                    "
                 />
            </div>
        </div>
    );
};

export default Home;