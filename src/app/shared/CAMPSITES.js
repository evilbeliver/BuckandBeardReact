import cfBuck2Img from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/CF Buck 2.jpeg';
import cfBuck3Img from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/CF Buck 3.jpeg';
import cfBuckImg from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/CF Buck.jpeg';
import cfFirstDeer from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/CF first deer.jpeg';
import cloverImg from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/Clover.jpeg'


export const CAMPSITES = [
    {
        id: 0,
        name: 'Hollywood',
        info: 'Testing',
        image: cfBuck2Img,
        elevation: 1233,
        featured: false,
        description:
            'This 520 acre property has 20+ permanant stand locations with a mix of hardwoods, pine stands, and creek bottoms  .'
    },
    {
        id: 1,
        name: 'Long Cane',
        info: 'test',
        image: cfBuck3Img,
        elevation: 877,
        featured: false,
        description:
            'Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River.'
    },
    {
        id: 2,
        name: 'Chappels Ferry',
        info: 'test',
        image: cfBuckImg,
        elevation: 2901,
        featured: false,
        description:
            'Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground.'
    },
    {
        id: 3,
        name: 'Old Charleston',
        info: 'test',
        image: cfFirstDeer,
        elevation: 42,
        featured: false,
        description:
            "Helping our youth hunters of tomorrow, we are a family club first and foremmost"
    },
    {
        id: 4,
        name: 'Piney Wood',
        info: 'test',
        image: cloverImg,
        elevation: 42,
        featured: true,
        description:
            "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
    }
];
