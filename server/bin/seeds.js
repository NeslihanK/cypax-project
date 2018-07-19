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
    },
    {
        platformName: "OpenClassrooms",
        link: "https://openclassrooms.com/en/",
        image: "https://pbs.twimg.com/profile_images/979726623657381889/ugnnQqXa_400x400.jpg",
    },
    {
        platformName: "Level up Tutorials",
        link: "https://www.leveluptutorials.com/",
        image: "http://webdesignledger.com/wp-content/uploads/2015/09/00-level-up-tutorials-logo.jpg",
    },

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
            image: "https://secure.meetupstatic.com/photos/event/8/0/0/8/600_472052776.jpeg",
            category: "JS",
            _platform: platforms[0]._id,
            link: "https://de.udacity.com/course/intro-to-javascript--ud803",
            price: "free",
            rating: "6",
        },
        {
            courseName: "Intro to HTML & CSS",
            image: "",
            category: "CSS",
            _platform: platforms[0]._id,
            link: "https://de.udacity.com/course/intro-to-html-and-css--ud304",
            price: "free",
            rating: "6",
        },
        {
            courseName: "Intro to Python",
            image: "",
            category: "PYTHON",
            _platform: platforms[0]._id,
            link: "https://de.udacity.com/course/introduction-to-python--ud1110",
            price: "free",
            rating: "6",
        },
        {
            courseName: "Java Programming Basics",
            image: "",
            category: "JAVA",
            _platform: platforms[0]._id,
            link: "https://de.udacity.com/course/java-programming-basics--ud282",
            price: "free",
            rating: "6",
        },
        {
            courseName: "C++ for Programmers",
            image: "",
            category: "C++",
            _platform: platforms[0]._id,
            link: "https://de.udacity.com/course/c-for-programmers--ud210",
            price: "free",
            rating: "6",
        },

        // Udemy Courses
        {
            courseName: "Javascript for beginners",
            image: "",
            category: "JS",
            _platform: platforms[1]._id,
            link: "https://www.udemy.com/learn-javascript-fundamentals/",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "CSS - The Complete Guide (incl. Flexbox, Grid & Sass)",
            image: "",
            category: "CSS",
            _platform: platforms[1]._id,
            link: "https://www.udemy.com/css-the-complete-guide-incl-flexbox-grid-sass/",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "The Complete Python Course | Learn Python by Doing",
            image: "",
            category: "PYTHON",
            _platform: platforms[1]._id,
            link: "https://www.udemy.com/the-complete-python-course/",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "PHP for Beginners",
            image: "",
            category: "PHP",
            _platform: platforms[1]._id,
            link: "https://www.udemy.com/php-for-beginners-/",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "Complete Java Masterclass - updated for Java 10",
            image: "",
            category: "JAVA",
            _platform: platforms[1]._id,
            link: "https://www.udemy.com/java-the-complete-java-developer-course/",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "C++: From Beginner to Expert",
            image: "",
            category: "C++",
            _platform: platforms[1]._id,
            link: "https://www.udemy.com/video-course-c-from-beginner-to-expert/",
            price: "with fee",
            rating: "10",
        },

        // KhanAcademy Courses
        {
            courseName: "Intro to JS: Drawing & Animation",
            image: "",
            category: "JS",
            _platform: platforms[2]._id,
            link: "https://www.khanacademy.org/computing/computer-programming/programming",
            price: "free",
            rating: "10",
        },
        {
            courseName: "Intro to HTML/CSS: Making webpages",
            image: "",
            category: "CSS",
            _platform: platforms[2]._id,
            link: "https://www.khanacademy.org/computing/computer-programming/html-css",
            price: "free",
            rating: "10",
        },

        // Scrimba Courses
        {
            courseName: "Introduction to Javascript",
            image: "",
            category: "JS",
            _platform: platforms[3]._id,
            link: "https://scrimba.com/g/gintrotojavascript",
            price: "free",
            rating: "10",
        },
        {
            courseName: "Introduction to CSS",
            image: "aaaa",
            category: "CSS",
            _platform: platforms[3]._id,
            link: "https://scrimba.com/g/gintrotocss",
            price: "free",
            rating: "10",
        },
        
        // CodeCademy Courses
        {
            courseName: "Javascript",
            image: "",
            category: "JS",
            _platform: platforms[4]._id,
            link: "https://www.codecademy.com/catalog/language/javascript",
            price: "free",
            rating: "10",
        },
        {
            courseName: "HTML & CSS",
            image: "",
            category: "CSS",
            _platform: platforms[4]._id,
            link: "https://www.codecademy.com/catalog/language/html-css",
            price: "free",
            rating: "10",
        },
        {
            courseName: "Python",
            image: "",
            category: "PYTHON",
            _platform: platforms[4]._id,
            link: "https://www.codecademy.com/catalog/language/python",
            price: "free",
            rating: "10",
        },
        {
            courseName: "Java",
            image: "",
            category: "JAVA",
            _platform: platforms[4]._id,
            link: "https://www.codecademy.com/catalog/language/java",
            price: "free",
            rating: "10",
        },

        // CodeCademy Courses
        // {
        //     courseName: "Javascript",
        //     image: "",
        //     category: "JS",
        //     _platform: platforms[5]._id,
        //     link: "https://www.codecademy.com/catalog/language/javascript",
        //     price: 0,
        //     rating: "10",
        // },

        // edX Courses
        {
            courseName: "JavaScript Introduction",
            image: "",
            category: "JS",
            _platform: platforms[6]._id,
            link: "https://www.edx.org/course/javascript-introduction-w3cx-js-0x-0",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "HTML5 and CSS Fundamentals",
            image: "",
            category: "CSS",
            _platform: platforms[6]._id,
            link: "https://www.edx.org/course/html5-and-css-fundamentals",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "Introduction to Python: Absolute Beginner",
            image: "",
            category: "PYTHON",
            _platform: platforms[6]._id,
            link: "https://www.edx.org/course/introduction-to-python-absolute-beginner-0",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "Learn to Programm in Java",
            image: "",
            category: "JAVA",
            _platform: platforms[6]._id,
            link: "https://www.edx.org/course/learn-to-program-in-java-0",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "Introduction to C++",
            image: "",
            category: "C++",
            _platform: platforms[6]._id,
            link: "https://www.edx.org/course/introduction-to-c-0",
            price: "with fee",
            rating: "10",
        },

        // Lynda Courses
        {
            courseName: "Learning the Javascript Language",
            image: "",
            category: "JS",
            _platform: platforms[7]._id,
            link: "https://www.lynda.com/JavaScript-tutorials/Introducing-JavaScript-Language/123563-2.html",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "Learning CSS",
            image: "",
            category: "CSS",
            _platform: platforms[7]._id,
            link: "https://www.lynda.com/CSS-tutorials/CSS-Fundamentals/417645-2.html?srchtrk=index%3a22%0alinktypeid%3a2%0aq%3aCSS%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "Learning Python",
            image: "",
            category: "PYTHON",
            _platform: platforms[7]._id,
            link: "https://www.lynda.com/Python-tutorials/Learning-Python/661773-2.html?srchtrk=index%3a1%0alinktypeid%3a2%0aq%3aPython%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "Learning PHP",
            image: "",
            category: "PHP",
            _platform: platforms[7]._id,
            link: "https://www.lynda.com/PHP-tutorials/Introducing-PHP/418256-2.html?srchtrk=index%3a4%0alinktypeid%3a2%0aq%3aPHP%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "Learning Java",
            image: "",
            category: "JAVA",
            _platform: platforms[7]._id,
            link: "https://www.lynda.com/Java-tutorials/Learning-Java-2018/669544-2.html?srchtrk=index%3a1%0alinktypeid%3a2%0aq%3aJava%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "Learning C++",
            image: "",
            category: "C++",
            _platform: platforms[7]._id,
            link: "https://www.lynda.com/C-tutorials/Up-Running-C/167922-2.html?srchtrk=index%3a5%0alinktypeid%3a2%0aq%3ac%2b%2b%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2",
            price: "with fee",
            rating: "10",
        },

        // freeCodeCamp Courses 
      
        {
            courseName: "Javascript Algorithms And Data Structures Certification",
            image: "",
            category: "JS",
            _platform: platforms[8]._id,
            link: "https://learn.freecodecamp.org/",
            price: "free",
            rating: "10",
        },
        {
            courseName: "HTML & CSS",
            image: "",
            category: "CSS",
            _platform: platforms[8]._id,
            link: "https://learn.freecodecamp.org/",
            price: "free",
            rating: "10",
        },

        // W3schools Courses

        {
            courseName: "Learn Javascript",
            image: "",
            category: "JS",
            _platform: platforms[9]._id,
            link: "https://www.w3schools.com/js/default.asp",
            price: "free",
            rating: "10",
        },
        {
            courseName: "Learn CSS",
            image: "",
            category: "CSS",
            _platform: platforms[9]._id,
            link: "https://www.w3schools.com/css/default.asp",
            price: "free",
            rating: "10",
        },
        {
            courseName: "Learn PHP",
            image: "",
            category: "PHP",
            _platform: platforms[9]._id,
            link: "https://www.w3schools.com/php/default.asp",
            price: "free",
            rating: "10",
        },

        // Mozilla Developer Network Courses

        {
            courseName: "JavaScript",
            image: "",
            category: "JS",
            _platform: platforms[10]._id,
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            price: "free",
            rating: "10",
        },
        {
            courseName: "CSS",
            image: "",
            category: "CSS",
            _platform: platforms[10]._id,
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            price: "free",
            rating: "10",
        },
        {
            courseName: "CSS",
            image: "",
            category: "CSS",
            _platform: platforms[10]._id,
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            price: "free",
            rating: "10",
        },

        // YouTube 
        {
            courseName: "JavaScript Tutorial for Beginners",
            image: "",
            category: "JS",
            _platform: platforms[12]._id,
            link: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
            price: "free",
            rating: "10",
        },
        {
            courseName: "JavaScript Tutorial for Absolute Beginners",
            image: "",
            category: "JS",
            _platform: platforms[12]._id,
            link: "https://www.youtube.com/watch?v=XL9Ri8pO68w",
            price: "free",
            rating: "10",
        },
        {
            courseName: "JavaScript Video Tutorial Pt 1",
            image: "",
            category: "JS",
            _platform: platforms[12]._id,
            link: "hhttps://www.youtube.com/watch?v=_cLvpJY2deo",
            price: "free",
            rating: "10",
        },
        {
            courseName: "HTML & CSS Tutorial for Beginners",
            image: "",
            category: "CSS",
            _platform: platforms[12]._id,
            link: "https://www.youtube.com/watch?v=y3UH2gAhwPI",
            price: "free",
            rating: "10",
        },
        {
            courseName: "Python Programming",
            image: "",
            category: "PYTHON",
            _platform: platforms[12]._id,
            link: "https://www.youtube.com/watch?v=N4mEzFDjqtA",
            price: "free",
            rating: "10",
        },
        {
            courseName: "Python Tutorial for Absolute Beginners",
            image: "",
            category: "PYTHON",
            _platform: platforms[12]._id,
            link: "https://www.youtube.com/watch?v=Z1Yd7upQsXY",
            price: "free",
            rating: "10",
        },
        {
            courseName: "PHP Programming",
            image: "",
            category: "PHP",
            _platform: platforms[12]._id,
            link: "https://www.youtube.com/watch?v=7TF00hJI78Y",
            price: "free",
            rating: "10",
        },
        {
            courseName: "How to learn PHP and MySQL with Practical full Project",
            image: "",
            category: "PHP",
            _platform: platforms[12]._id,
            link: "https://www.youtube.com/watch?v=NMSlQjm2row",
            price: "free",
            rating: "10",
        },
        {
            courseName: "1: Introduction to PHP Programming",
            image: "",
            category: "PHP",
            _platform: platforms[12]._id,
            link: "https://www.youtube.com/watch?v=qVU3V0A05k8",
            price: "free",
            rating: "10",
        },
        {
            courseName: "PHP for Beginners",
            image: "",
            category: "PHP",
            _platform: platforms[12]._id,
            link: "https://www.youtube.com/watch?v=0hOMA_-jnpI",
            price: "free",
            rating: "10",
        },
        {
            courseName: "Java Tutorial for Beginners",
            image: "",
            category: "JAVA",
            _platform: platforms[12]._id,
            link: "https://www.youtube.com/watch?v=3u1fu6f8Hto",
            price: "free",
            rating: "10",
        },
        {
            courseName: "Complete Core Java Programming ",
            image: "",
            category: "JAVA",
            _platform: platforms[12]._id,
            link: "https://www.youtube.com/watch?v=R08YRplsYGw",
            price: "free",
            rating: "10",
        },
        {
            courseName: "Learn Java Simply Full",
            image: "",
            category: "JAVA",
            _platform: platforms[12]._id,
            link: "https://www.youtube.com/watch?v=jWTjHmuuvJs",
            price: "free",
            rating: "10",
        },
        {
            courseName: "Learn Java Programming For Beginners",
            image: "",
            category: "JAVA",
            _platform: platforms[12]._id,
            link: "https://www.youtube.com/watch?v=00RxteR1oGQ",
            price: "free",
            rating: "10",
        },
        {
            courseName: "C++ Programming",
            image: "",
            category: "C++",
            _platform: platforms[12]._id,
            link: "https://www.youtube.com/watch?v=Rub-JsjMhWY",
            price: "free",
            rating: "10",
        },
        {
            courseName: "C++ Tutorials From Basic to Advance",
            image: "",
            category: "C++",
            _platform: platforms[12]._id,
            link: "https://www.youtube.com/watch?v=mUQZ1qmKlLY",
            price: "free",
            rating: "10",
        },
        {
            courseName: "C++ Beginners Tutorial 1",
            image: "",
            category: "C++",
            _platform: platforms[12]._id,
            link: "https://www.youtube.com/watch?v=ki3B8a-jLrE",
            price: "free",
            rating: "10",
        },

        // Eduonix Courses

        {
            courseName: "The Complete Javascript Course",
            image: "",
            category: "JS",
            _platform: platforms[13]._id,
            link: "https://www.eduonix.com/the-complete-javascript-course-build-a-professional-project",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "JavaScript Course",
            image: "",
            category: "JS",
            _platform: platforms[13]._id,
            link: "https://www.eduonix.com/the-ultimate-javascript-course-build-real-world-apps2018",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "CSS - The Complete Guide (incl. Flexbox, Grid & Sass)",
            image: "",
            category: "CSS",
            _platform: platforms[13]._id,
            link: "https://www.eduonix.com/css-the-complete-guide-incl-flexbox-grid-sass",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "HTML5 And CSS3 Build Modern Responsive Websites",
            image: "",
            category: "CSS",
            _platform: platforms[13]._id,
            link: "https://www.eduonix.com/html5-and-css3-build-modern-responsive-websites",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "Python Programming Learn Python with 100+ Practicals",
            image: "",
            category: "PYTHON",
            _platform: platforms[13]._id,
            link: "https://www.eduonix.com/python-programming--learn-python-with-100plus-practicals",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "Learn Python programming From Scratch",
            image: "",
            category: "PYTHON",
            _platform: platforms[13]._id,
            link: "https://www.eduonix.com/courses/Software-Development/Learn-Python-programming-From-Scratch",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "PHP CodeIgniter for Absolute Beginners",
            image: "",
            category: "PHP",
            _platform: platforms[13]._id,
            link: "https://www.eduonix.com/php-codeigniter-for-absolute-beginners",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "PHP Programming For Web Development",
            image: "",
            category: "PHP",
            _platform: platforms[13]._id,
            link: "https://www.eduonix.com/php-programming-for-web-development",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "Java for beginners Step-by-step handson guide to Java",
            image: "",
            category: "JAVA",
            _platform: platforms[13]._id,
            link: "https://www.eduonix.com/java-for-beginners-stepbystep-handson-guide-to-java",
            price: "with fee",
            rating: "10",
        },
        {
            courseName: "Complete Java 9 Masterclass- Beginner to Expert",
            image: "",
            category: "JAVA",
            _platform: platforms[13]._id,
            link: "https://www.eduonix.com/complete-java-9-masterclass-beginner-to-expert",
            price: "with fee",
            rating: "10",
        },
        
        // Tutorialpoint Courses

        {
            courseName: "Javascript Tutorial",
            image: "",
            category: "JS",
            _platform: platforms[14]._id,
            link: "https://www.tutorialspoint.com/javascript/index.htm",
            price: "free",
            rating: "10",
        },
        {
            courseName: "CSS Tutorial",
            image: "",
            category: "CSS",
            _platform: platforms[14]._id,
            link: "https://www.tutorialspoint.com/css/index.htm",
            price: "free",
            rating: "10",
        },
        {
            courseName: "Python Tutorial",
            image: "",
            category: "PYTHON",
            _platform: platforms[14]._id,
            link: "https://www.tutorialspoint.com/python/index.htm",
            price: "free",
            rating: "10",
        },
        {
            courseName: "PHP Tutorial",
            image: "",
            category: "PHP",
            _platform: platforms[14]._id,
            link: "https://www.tutorialspoint.com/php/index.htm",
            price: "free",
            rating: "10",
        },
        {
            courseName: "Java Tutorial",
            image: "",
            category: "JAVA",
            _platform: platforms[14]._id,
            link: "https://www.tutorialspoint.com/java/index.htm",
            price: "free",
            rating: "10",
        },
        {
            courseName: "Java Tutorial",
            image: "",
            category: "C++",
            _platform: platforms[14]._id,
            link: "https://www.tutorialspoint.com/cplusplus/index.htm",
            price: "free",
            rating: "10",
        },

        // OpenClassRoom Courses

        {
            courseName: "Learn to code with Javascript",
            image: "",
            category: "JS",
            _platform: platforms[16]._id,
            link: "https://openclassrooms.com/en/courses/3523231-learn-to-code-with-javascript",
            price: "free",
            rating: "10",
        },
        {
            courseName: "Learn HTML & CSS",
            image: "",
            category: "CSS",
            _platform: platforms[16]._id,
            link: "https://openclassrooms.com/en/courses/5265446-build-your-first-web-pages-with-html-and-css",
            price: "free",
            rating: "10",
        },
        
        // Level Up Tutorial Courses

        {
            courseName: "Javascript Tutorial",
            image: "",
            category: "JS",
            _platform: platforms[17]._id,
            link: "https://www.leveluptutorials.com/tutorials/javascript-tutorials",
            price: "free",
            rating: "10",
        },
        {
            courseName: "CSS Tutorial",
            image: "",
            category: "CSS",
            _platform: platforms[17]._id,
            link: "https://www.leveluptutorials.com/tutorials/css-tutorials",
            price: "free",
            rating: "10",
        },

    ]
    Course.create(courses)
    .then((courses) =>{
        console.log(courses.length + " courses created");  
    })
    .catch(err => console.log(err))
})
.catch(err => console.log(err))






