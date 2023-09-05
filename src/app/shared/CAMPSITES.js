import cfBuck2Img from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/CF Buck 2.jpeg';
import cfBuck3Img from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/CF Buck 3.jpeg';
import cfBuckImg from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/CF Buck.jpeg';
import cfFirstDeer from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/CF first deer.jpeg';
import cloverImg from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/Clover.jpeg'


export const CAMPSITES = [
    {
        id: 0,
        name: 'Hollywood',
        directions:  "https://goo.gl/maps/t41yX5xT2cDS9axQ9",
        info: 'Deer Hunting',
        image: cfBuck2Img,
        elevation: 1233,
        featured: true,
        altdescription: 'As a club we all work hard to help generate opportunities for great deer like this one .',
        description:
            'This 520 acre property has 20+ permanant stand locations with a mix of hardwoods, pine stands, and creek bottoms  .'
    },
    {
        id: 1,
        name: 'Long Cane',
        directions: "https://goo.gl/maps/ENw5f8Ce3XDGwJoM8",
        info: 'test',
        image: cfBuck3Img,
        elevation: 877,
        featured: true,
        altdescription: 'As a club we all work hard to help generate opportunities for great deer like this one .',
        description:
            'Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River.'
    },
    {
        id: 2,
        name: 'Chappels Ferry',
        directions: "https://goo.gl/maps/w9CzC3vD9ho1p45q9",
        info: 'test',
        image: cfBuckImg,
        elevation: 2901,
        featured: false,
        altdescription: 'As a club we all work hard to help generate opportunities for great deer like this one .',
        description:
            'Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground.'
    },
    {
        id: 3,
        name: 'Old Charleston',
        directions: "https://goo.gl/maps/NdPbfFC4G5LTg7n66",
        info: 'test',
        image: cfFirstDeer,
        elevation: 42,
        featured: false,
        altdescription: 'As a club we all work hard to help generate opportunities for great deer like this one .',
        description:
            "Helping our youth hunters of tomorrow, we are a family club first and foremmost"
    },
    {
        id: 4,
        name: 'Piney Wood',
        directions: "https://goo.gl/maps/hqAeMGhH63wfyHRa7",
        info: 'Our clover plot helping to feed tomorrows deer',
        image: cloverImg,
        elevation: 42,
        featured: true,
        altdescription: 'As a club we all work hard to help generate opportunities for great deer like this one .',
        description:
            "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
    }
];
