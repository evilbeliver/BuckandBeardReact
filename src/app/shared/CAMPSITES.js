import cfBuck2Img from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/CF Buck 2.jpeg';
import cfBuck3Img from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/CF Buck 3.jpeg';
import cfBuckImg from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/CF Buck.jpeg';
import cfFirstDeer from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/CF first deer.jpeg';
import cloverImg from '/Users/davidcristinzio/Desktop/BuckandBeardReact/src/app/assets/img/Clover.jpeg'


export const CAMPSITES = [
    {
        id: 0,
        name: 'Hollywood Tract',
        directions:  "https://goo.gl/maps/t41yX5xT2cDS9axQ9",
        info: 'Deer Hunting',
        image: cfBuck2Img,
        featured: true,
        altdescription: 'As a club we all work hard in the offseason to help generate opportunities for great deer like this one .',
        description:
            'Click the button below for driving directions to this property.'
    },
    {
        id: 1,
        name: 'Long Cane Tract',
        directions: "https://goo.gl/maps/ENw5f8Ce3XDGwJoM8",
        info: 'test',
        image: cfBuck3Img,
        featured: true,
        altdescription: 'As a club we all work hard to help generate opportunities for great deer like this one .',
        description:
            'Click the button below for driving diretions to this property.'
    },
    {
        id: 2,
        name: 'Chappels Ferry Tract',
        directions: "https://goo.gl/maps/w9CzC3vD9ho1p45q9",
        info: 'test',
        image: cloverImg,
        featured: false,
        altdescription: 'As a club we all work hard to help generate opportunities for great deer like this one .',
        description:
            'Click below for driving diretions to this property.'
    },
    {
        id: 3,
        name: 'Old Charleston Tract',
        directions: "https://goo.gl/maps/NdPbfFC4G5LTg7n66",
        info: 'test',
        image: cfFirstDeer,
        featured: false,
        altdescription: 'As a club we all work hard to help generate opportunities for great deer like this one .',
        description:
            'Click the button below for driving diretions to this property.'
    },
    {
        id: 4,
        name: 'Piney Wood Tract',
        directions: "https://goo.gl/maps/hqAeMGhH63wfyHRa7",
        info: 'Our clover plot helping to feed tomorrows deer',
        image: cfBuckImg,
        featured: true,
        altdescription: 'As a club we all work hard to help generate opportunities for great deer like this one .',
        description:
            'Click the button below for driving diretions to this property.'
    }
];
