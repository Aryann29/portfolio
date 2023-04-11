import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import ProjectList from './components/ProjectList';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

const projectl = [
  {
    title: 'Youtube Commnet Analyzer ',
    description: 'Developed a sentiment analysis project using natural language processing techniques and logistic regression model to classify the top 100 commentsof any YouTube video as positive or negative. The project is hosted on Streamlit and AWS server, and uti lizes Google APIv3 to extract comments associated with the video. The analyzed data is stored in MySQL on Amazon RDS for easy management and accessibility.',
    imageSrc: 'https://content.altexsoft.com/media/2018/09/sentiment_analysis.jpg',
    skills: ['Python', 'Natural Language Processing', 'Logistic Regression', 'Streamlit', 'AWS', 'Google APIv3', 'MySQL', 'Slack API', 'Docker'],
    startdate: 'July 15, 2021',
    enddate :'July 15, 2021',
    githubLink : 'https://github.com/Aryann29/youtube-comment-analyzer',
    websiteLink: 'https://aryann29-youtube-comment-analyzer-stapp-fswa2l.streamlit.app/'
  },
  {
    title: 'Dog vs Cat',
    description: 'Developed a deep learning project using CNNs to classify images of dogs and cats using transfer learning with a pre-trained model called MobileNet V2. Achieved high classification accuracy on the test dataset, showcasing the effectiveness of transfer learning in reducing training time and improving classification performance.',
    imageSrc: 'https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_cats_1280p_0.jpg?itok=IuOEfXG9',
    skills: ['Python', 'Deep Learning', 'Convolutional Neural Networks', 'Transfer Learning', 'MobileNet V2'],
    startdate: 'Feb 2023',
    enddate :'Feb 2023',
    githubLink : 'https://github.com/Aryann29/Dog-Vs-Cat',
  },
  {
    title: 'Sentiment Analysis on Amazon Reviews',
    description: 'Developed a sentiment analysis project on Amazon reviews using the TF-IDF method and classification algorithms such as SVM and Logistic Regression. Achieved high accuracy in sentiment classification on the test dataset, showcasing the effectiveness of the TF-IDF method and classification algorithms in analyzing text data.',
    imageSrc: 'https://cdn.pixabay.com/photo/2016/05/29/08/37/sentiment-analysis-1422581_960_720.jpg',
    skills: ['Python', 'Machine Learning', 'Natural Language Processing', 'SVM', 'Logistic Regression', 'TF-IDF'],
    startdate: 'February 2023',
    enddate: 'February 2023',
    githubLink: 'https://github.com/Aryann29/Sentiment-Analysis-Using-TFIDf',
    
  },
  
  {
    title: 'Netflix Clone using ReactJs TailwindCss and Firebase',
    description: 'Built a Netflix clone using ReactJS, TailwindCSS, and Firebase, with features including user authentication, watchlist creation, and the ability to remove shows from the watchlist. Demonstrated proficiency in front-end web development and modern web development tools and libraries, improving skills in ReactJS, TailwindCSS, and Firebase.',
    imageSrc: 'https://i.imgur.com/KkSh4mW.png',
    skills: ['ReactJS', 'TailwindCSS', 'Firebase'],
    startdate: 'Oct 1, 2023',
    enddate: 'Oct 31, 2023',
    githubLink: 'https://github.com/Aryann29/Netflix-Clone-Reactjs-TailwindCss-Firebase-',
    websiteLink: 'https://netflixclone-17d0e.web.app/'
  },
  
  {
    title: 'Project 5',
    description: 'Vivamus consectetur ex ac vestibulum mattis. Sed euismod, mi ac sollicitudin tristique, mi nulla tincidunt nunc.',
    imageSrc: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 5',
    description: 'Vivamus consectetur ex ac vestibulum mattis. Sed euismod, mi ac sollicitudin tristique, mi nulla tincidunt nunc.',
    imageSrc: 'https://via.placeholder.com/150',
  },
];

function ScrollToTopOnMount() {
  useState(() => {
    scroll.scrollToTop();
  }, []);

  return null;
}

function App() {
  return (
    <div>
      <ScrollToTopOnMount />
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="resume">
        <Resume />
      </Element>
      <Element name="projects">
        <ProjectList projects={projectl}  />
      </Element>
      <Element name="blogs">
        <Blogs />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
