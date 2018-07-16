require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const Course = require('../models/Course');
const Platform = require('../models/Platform');


const mongoUri = process.env.MONGODB_URI
console.log(mongoUri)
mongoose.connect(mongoUri)
.then(() => {
    console.log('connected to Mongo')
})
.catch(err => console.log(err))

const platforms = [
    {
        platformName: "Udacity",
        link: "https://de.udacity.com/",
        image: "https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2017/10/udacity-logo.png",
    },
    {
        platformName: "Udemy",
        link: "https://www.udemy.com/",
        image: "https://www.wireless.education/wp-content/uploads/2018/05/udemy-free-study.png",
    },
    {
        platformName: "KhanAcademy",
        link: "https://www.khanacademy.org/",
        image: "https://i.pinimg.com/564x/12/87/84/128784b90f14d06cb1d00bfd06fc3ac5.jpg",
    },
    {
        platformName: "Scrimba",
        link: "https://scrimba.com/",
        image: "https://pbs.twimg.com/profile_images/845647043322400769/6hzLDCMg_400x400.jpg",
    },
    {
        platformName: "Codecademy",
        link: "https://www.codecademy.com/",
        image: "https://www.underconsideration.com/brandnew/archives/codecademy_logo_detail.png",
    },
    {
        platformName: "Coursera",
        link: "https://www.coursera.org/",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Coursera_logo.PNG",
    },
    {
        platformName: "edX",
        link: "https://www.edx.org/",
        image: "https://cdn-blog.lawrencemcdaniel.com/wp-content/uploads/2018/02/22125436/open-edx-banner.jpg",
    },
    {
        platformName: "Lynda.com",
        link: "https://www.lynda.com/",
        image: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0001/9770/brand.gif?itok=OlK7U8zV",
    },
    {
        platformName: "freeCodeCamp",
        link: "https://www.freecodecamp.org/",
        image: "https://secure.meetupstatic.com/photos/event/4/c/b/b/600_468259643.jpeg",
    },
    {
        platformName: "w3schools",
        link: "https://www.w3schools.com/",
        image: "http://www.intertech.com/Blog/wp-content/uploads/2015/07/w3schools-logo-1.png",
    },
    {
        platformName: "MDN web docs",
        link: "https://developer.mozilla.org/",
        image: "https://pbs.twimg.com/media/DBq5mBcXUAA7I2Q.jpg",
    },
    {
        platformName: "Treehouse",
        link: "https://teamtreehouse.com/",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a3/Treehouse%27s_logo_%28Jan_2015%29.png",
    },
    {
        platformName: "YouTube",
        link: "https://www.youtube.com/",
        image: "https://www.designtagebuch.de/wp-content/uploads/mediathek//2017/08/youtube-logo-light-700x507.jpg",
    },
    {
        platformName: "Eduonix",
        link: "https://www.eduonix.com/",
        image: "https://www.mooclab.club/data/showcase/0/981-b57b512976c3dc9decc94c33537467c5.jpg",
    },
    {
        platformName: "Tutorialspoint",
        link: "https://www.tutorialspoint.com/index.htm",
        image: "https://image3.mouthshut.com/images/imagesp/925740462s.jpg",
    },
    {
        platformName: "Google Education",
        link: "https://developers.google.com/edu/",
        image: "https://www.leedscitycollege.ac.uk/media/3623/google-for-education-logo.jpg?width=390&height=207",
    }
]

Platform.deleteMany()
.then(() => Course.deleteMany())
.then(() => Platform.create(platforms))
.then((platforms) => {

    console.log(platforms.length + " platforms created");
    const courses = [
         // Udacity Courses
        {
            courseName: "Intro to Javascript",
            image: "",
            category: "JS",
            _platform: platforms[0]._id,
            link: "https://de.udacity.com/course/intro-to-javascript--ud803",
            price: 0,
            rating: "6",
        },
        {
            courseName: "Intro to HTML & CSS",
            image: "",
            category: "CSS",
            _platform: platforms[0]._id,
            link: "https://de.udacity.com/course/intro-to-html-and-css--ud304",
            price: 0,
            rating: "6",
        },
        {
            courseName: "Intro to Python",
            image: "",
            category: "PYTHON",
            _platform: platforms[0]._id,
            link: "https://de.udacity.com/course/introduction-to-python--ud1110",
            price: 0,
            rating: "6",
        },
        {
            courseName: "Java Programming Basics",
            image: "",
            category: "JAVA",
            _platform: platforms[0]._id,
            link: "https://de.udacity.com/course/java-programming-basics--ud282",
            price: 0,
            rating: "6",
        },
        {
            courseName: "C++ for Programmers",
            image: "",
            category: "C++",
            _platform: platforms[0]._id,
            link: "https://de.udacity.com/course/c-for-programmers--ud210",
            price: 0,
            rating: "6",
        },

        // Udemy Courses
        {
            courseName: "Javascript for beginners",
            image: "",
            category: "JS",
            _platform: platforms[1]._id,
            link: "https://www.udemy.com/learn-javascript-fundamentals/",
            price: 14.99,
            rating: "10",
        },
        {
            courseName: "CSS - The Complete Guide (incl. Flexbox, Grid & Sass)",
            image: "",
            category: "CSS",
            _platform: platforms[1]._id,
            link: "https://www.udemy.com/css-the-complete-guide-incl-flexbox-grid-sass/",
            price: 14.99,
            rating: "10",
        },
        {
            courseName: "The Complete Python Course | Learn Python by Doing",
            image: "",
            category: "PYTHON",
            _platform: platforms[1]._id,
            link: "https://www.udemy.com/the-complete-python-course/",
            price: 14.99,
            rating: "10",
        },
        {
            courseName: "PHP for Beginners",
            image: "",
            category: "PHP",
            _platform: platforms[1]._id,
            link: "https://www.udemy.com/php-for-beginners-/",
            price: 14.99,
            rating: "10",
        },
        {
            courseName: "Complete Java Masterclass - updated for Java 10",
            image: "",
            category: "JAVA",
            _platform: platforms[1]._id,
            link: "https://www.udemy.com/java-the-complete-java-developer-course/",
            price: 14.99,
            rating: "10",
        },
        {
            courseName: "C++: From Beginner to Expert",
            image: "",
            category: "C++",
            _platform: platforms[1]._id,
            link: "https://www.udemy.com/video-course-c-from-beginner-to-expert/",
            price: 14.99,
            rating: "10",
        },

        // KhanAcademy Courses
        {
            courseName: "Intro to JS: Drawing & Animation",
            image: "",
            category: "JS",
            _platform: platforms[2]._id,
            link: "https://www.khanacademy.org/computing/computer-programming/programming",
            price: 0,
            rating: "10",
        },
        {
            courseName: "Intro to HTML/CSS: Making webpages",
            image: "",
            category: "CSS",
            _platform: platforms[2]._id,
            link: "https://www.khanacademy.org/computing/computer-programming/html-css",
            price: 0,
            rating: "10",
        },

        // Scrimba Courses




      


    ]
    Course.create(courses)
    .then((courses) =>{
        console.log(courses.length + " courses created");
        
    })
    .catch(err => console.log(err))
})
.catch(err => console.log(err))






