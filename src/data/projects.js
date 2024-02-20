import JobSeeker from '../assets/img/JobSeeker.png'
import HayBoss from '../assets/img/HeyBoss.png'
import ReactPizza from '../assets/img/react-pizza.png'
import SneakerStore from '../assets/img/sneakers-store.png'
import RsHealthy from '../assets/img/rs-healthy.png'

const projects = [
  {
    imgSrc: JobSeeker,
    demoUrl: 'https://adwasar-job-seeker.netlify.app/',
    repoUrl: '',
    title: 'Team project: "JobSeeker"',
    description: 'Job search platform',
    functional: 'Product description, Feedback form, Localization of 2 languages, authorization',
    tools:
      'React, JavaScript, Bootstrap, Redux Toolkit, React Router, React Spinners, react-i18nano, REST APIs, SCSS, Prettier',
  },
  {
    imgSrc: HayBoss,
    demoUrl: 'https://marketplace-landing-29h.pages.dev/',
    repoUrl: '',
    title: 'Team project: "HeyBoss"',
    description: 'Landing for marketplace',
    functional: 'Product description, Feedback form, Localization of 2 languages',
    tools:
      'React, JavaScript, Bootstrap, React, Router, React Spinners, react-i18next, REST APIs, SCSS, ESlint, Prettier',
  },
  {
    imgSrc: ReactPizza,
    demoUrl: 'https://react-pizza-70179.netlify.app/',
    repoUrl: 'https://github.com/Adwasar/react-pizza',
    title: 'Project "Pizzas store"',
    description: 'Pizzas online store',
    functional: 'add cards on cart (storage on server), filter cards by name or category',
    tools:
      'React, JavaScript, Redux toolkit, React Router, React Spinners, React Skeleton, Axios, REST APIs, SCSS, ESlint, Prettier',
  },
  {
    imgSrc: SneakerStore,
    demoUrl: 'https://sneakers-store-3950213.netlify.app',
    repoUrl: 'https://github.com/Adwasar/react-sneakers',
    title: 'Project "Sneakers store"',
    description: 'Sneakers online store',
    functional:
      'add cards on cart (storage on server), add cards on favorites, filter by name, order history on the user page (storage on server)',
    tools:
      'React, JavaScript, React Router, React Spinners, React Skeleton, Axios, REST APIs, SCSS, ESlint, Prettier',
  },
  {
    imgSrc: RsHealthy,
    demoUrl: 'https://rs-clone-adwasar-pnmrvvtl-zhannach.netlify.app/',
    repoUrl: 'https://github.com/pnmrvvtl/rs-clone',
    title: 'Team project "RS-Healthy"',
    description: 'The application that helps with meal planning',
    functional:
      'after user input some values about himself our app can propose personal data for this user about health and propose meal plan for user.',
    tools: 'React, TypeScript, REST APIs, SCSS, Jest, ESlint, Prettier',
  },
]

export default projects
