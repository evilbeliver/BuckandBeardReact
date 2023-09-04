import cfBuck2Img from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/CF Buck 2.jpeg';
import cfBuck3Img from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/CF Buck 3.jpeg';
import cfBuckImg from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/CF Buck.jpeg';
import cloverImg from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/Clover.jpeg'


export const PROMOTIONS = [
    {
        id: 0,
        name: 'Trophy Buck OpportunitiesH',
        image: cfBuck2Img,
        featured: true,
        description:
            'Book a 5-day mountain trek with a seasoned outdoor guide! Fly fishing equipment and lessons provided.'
    },
    {
        id: 1,
        name: 'Into The Weeds',
        image: cfBuck3Img,
        featured: true,
        description:
            '5 days deep in the Redux National Monument, far from the beaten path, with only a reducer in your backpack. Guide provided.'
    },
    {
        id: 2,
        name: 'Bootstrap Teardown',
        image: cfBuckImg,
        featured: true,
        description: `In this weekend workshop, we'll rebuild your bootstraps from scratch, so you're ready for next-level excursions.`
    },
    {
        id: 3,
        name: 'Asynchronous Rendezvous',
        image: cloverImg,
        featured: false,
        description:
            'Meet up with your guide at the top of Promise Mountain. Or, try to. Good luck!'
    }
];
