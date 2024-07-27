// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import Feature1Img from './assets/img/features/tracking.json';
import Feature2Img from './assets/img/features/suggesstion.json';
import Feature3Img from './assets/img/features/fcollaboration.json';
import Feature4Img from './assets/img/features/goal_setting.json';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import Avatar4Img from '../src/assets/img/testimonials/avatar4.png';
import LogoV2 from '../src/assets/img/logo.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';

export const navigationData = [
  {
    name: 'About',
    href: 'about',
  },
  {
    name: 'Features',
    href: 'features',
  },
  {
    name: 'Testimonials',
    href: 'testimonials',
  },
];

export const heroData = {
  title: `Simplify Tasks, Enhance Collaboration`,
  subtitle:
    'Master Your Day with Taskify: Plan, Track, and Achieve Your Goals Anytime, Anywhere',
  btnText: 'Get Started',
};

export const aboutData = {
  title: 'Find Out A Little More About Us',
  subtitle:
    'We revolutionize productivity with Taskify. Organize tasks, track progress with graph-based analytics, get improvement suggestions, and collaborate seamlessly via chat and video calls. Discover how Taskify can transform your workflow and boost your efficiency. Explore our platform today!',
};

export const featuresData = {
  title: 'Key Features of Taskify',
  subtitle:
    'Enhance productivity with Taskify: track tasks, get improvement tips, and collaborate via chat and video. Try it now!',
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: 'Task Tracking',
      description:
        'Monitor tasks with graph-based analytics for clear progress.',
      linkText: 'Try Taskify',
      delay: '400',
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: 'Smart Suggestions',
      description:
        'Get personalized tips to improve your productivity and efficiency.',
      linkText: 'Try Taskify',
      delay: '700',
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: 'Seamless Collaboration',
      description:
        'Collaborate effortlessly through real-time chat and video calls.',
      linkText: 'Try Taskify',
      delay: '1000',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: 'Goal Setting',
      description:
        'Set and achieve your goals with structured task management.',
      linkText: 'Try Taskify',
      delay: '1300',
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'Sudhanshu',
    message:
      'This application revolutionized our study sessions! Task management and collaboration have never been this seamless and efficient.',
  },
  {
    image: Avatar2Img,
    name: 'Vaibhav',
    message:
      'A game-changer for group projects! Easy to use, and the collaboration features keep everyone on the same page.',
  },
  {
    image: Avatar3Img,
    name: 'Shivam',
    message:
      'Outstanding tool for team learning! It perfectly blends task management and collaboration, enhancing productivity and engagement'
  },

  {
    image: Avatar4Img,
    name: 'Ritesh',
    message:
      'Incredible! This app simplifies task management and boosts collaboration, making learning more interactive and organized.'
  },
];

export const ctaData = {
  title: 'Get started with Taskify now!',
  subtitle: 'Get Started: Organize tasks, boost productivity, and collaborate with your team. ',
  btnText2: 'Get Statrted',
};

export const footerData = {
  logo: LogoV2,
  address: 'Vibhuti Khand Gomti Nagar Lucknow',
  email: 'ksudhanshu394@gmail.com',
  phone: '+91-8115830551',
  list1: [
    {
      name: 'Profile',
      href: 'about',
    },
    {
      name: 'Features',
      href: 'features',
    },
    {
      name: 'Testimonials',
      href: 'testimonials',
    },
    
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: '© taskify, 2024. All rights reserved. Developed By techwarriors',
  icon: <BsChatDotsFill />,
};
