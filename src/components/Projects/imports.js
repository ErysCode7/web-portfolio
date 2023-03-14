//projects
import AdviceGenerator from "../../assets/images/projects/advice-generator.jpg";
import Blog from "../../assets/images/projects/blogs.png";
import Cocktails from "../../assets/images/projects/cocktails.jpg";
import Countries from "../../assets/images/projects/countries.jpg";
import Dictionary from "../../assets/images/projects/dictionary.png";
import EasyBank from "../../assets/images/projects/easybank.jpg";
import Ecomm from "../../assets/images/projects/ecomm.jpg";
import EdieHomepage from "../../assets/images/projects/edie-page.jpg";
import FrontendDocumentation from "../../assets/images/projects/frontend-docu.jpg";
import GithubGeneratorApp from "../../assets/images/projects/github-generator-app.jpg";
import GPT3 from "../../assets/images/projects/gpt3.jpg";
import Hulu from "../../assets/images/projects/hulu.jpg";
import MovieStar from "../../assets/images/projects/movie-star.png";
import MovieLand from "../../assets/images/projects/movieland.jpg";
import Realtor from "../../assets/images/projects/realtor.jpg";
import Royals from "../../assets/images/projects/royals.jpg";
import SpaceWebsite from "../../assets/images/projects/space.jpg";
import TodoList from "../../assets/images/projects/todolist.png";
import Toyota from "../../assets/images/projects/toyota.jpg";

//certificates
import CSScertificate from "../../assets/images/certificate/CSS.jpg";
import FCC from "../../assets/images/certificate/fcc.jpg";
import Java from "../../assets/images/certificate/Java.png";
import PHP from "../../assets/images/certificate/PHP.jpg";
import Python from "../../assets/images/certificate/Python.png";
import ResponsiveWeb from "../../assets/images/certificate/responsive-webdesign.jpg";
import CryptoInc from "../../assets/images/projects/crypto.jpg";
import FBV2 from "../../assets/images/projects/fb-v2.jpg";
import PGD from "../../assets/images/projects/pgd.jpg";
import Weatheria from "../../assets/images/projects/weatheria.jpg";

export { CSScertificate, FCC, Java, PHP, Python, ResponsiveWeb };

const ProjectDetails = [
  {
    image: Dictionary,
    title: "Dictionary APP",
    text: "Dictionary is web application that provides users with access to a dictionary. It can be used to look up the meanings of words, learn new vocabulary and improve language skills.",
    site: "https://dictionary-app-sandy.vercel.app/",
    code: "https://github.com/ErysCode7/dictionary-app",
  },
  {
    image: PGD,
    title: "Pokémon Go-Dex",
    text: "Pokemon Go-Dex a digital web application displays information about the various species of Pokémon. Built with modern design, Next.js, TypeScript, Tailwind CSS, Redux Toolkit Query.",
    site: "https://pokemon-go-dex-pwa4.vercel.app/",
    code: null,
  },
  {
    image: FBV2,
    title: "FB v2",
    text: "FB v2 is a application where you can login, post some data and upload a photo using firebase as a BaaS. Built with Next.js, TypeScript, Tailwind CSS, Next Auth and Firebase.",
    site: "http://fb-v2-lemon.vercel.app/",
    code: "https://github.com/ErysCode7/fb-v2",
  },
  {
    image: Hulu,
    title: "Hulu v2",
    text: "Hulu v2 is a Hulu clone application where you can see list of trending movies different genres etc. Rebuilt using Next.js, TypeScript and Tailwind CSS and the TMDB API.",
    site: "https://hulu-v2-lyart.vercel.app/",
    code: "https://github.com/ErysCode7/hulu-v2",
  },
  {
    image: Realtor,
    title: "Realtor",
    text: "Realtor is Real Estate Application using the Bayut API where you can find different renting properties in Dubai. Built with Next.js, TypeScript, Chakra UI and Bayut API.",
    site: "https://realtor-ten-iota.vercel.app/",
    code: "https://github.com/ErysCode7/Realtor",
  },
  {
    image: Weatheria,
    title: "Weatheria",
    text: "Weatheria a weather application that keep track of the weather around the world. Built using Next.js, TypeScript, Redux Toolkit, TailwindCSS, Chakra UI and the openweather api.",
    site: "https://weatheria-taupe.vercel.app/",
    code: "https://github.com/ErysCode7/weatheria",
  },
  {
    image: CryptoInc,
    title: "Crypto Incorporated",
    text: "A Crypto Application track of all cryptocurrency markets, news and updates about crypto and many more. Built with ReactJS, Ant Design, Redux Toolkit Query and Chart.js.",
    site: "https://crypto-incorporated-web.vercel.app/",
    code: "https://github.com/ErysCode7/crypto-incorporated",
  },
  {
    image: MovieStar,
    title: "MovieStar",
    text: "Movie Application in ReactJS. Using OMDB API, Redux Toolkit, Routing, Axios with carousel",
    site: "https://movie-star-tawny.vercel.app/",
    code: "https://github.com/ErysCode7/movie-star",
  },
  {
    image: Ecomm,
    title: "E-commerce product",
    text: "Frontend Mentor - E-commerce product built with ReactJS, TailwindCSS and Redux Toolkit",
    site: "https://ecommerce-product-beta.vercel.app/",
    code: "https://github.com/ErysCode7/ecommerce-product",
  },
  {
    image: Countries,
    title: "Rest Countries API",
    text: "REST Countries API with color theme switcher. Built with ReactJS and TailwindCSS",
    site: "https://countries-api-black-psi.vercel.app/",
    code: "https://github.com/ErysCode7/countries-api",
  },
  {
    image: MovieLand,
    title: "MovieLand",
    text: "Movie API application in React JS fetching data from external source. Built with Tailwind CSS, Axios Context API React Router Dom",
    site: "https://movieland-beta.vercel.app/",
    code: "https://github.com/ErysCode7/movieland",
  },
  {
    image: Cocktails,
    title: "Cocktails app",
    text: "Random cocktails application in React JS fetching data from external source. Built with material design, Axios, Context API",
    site: "https://cocktails-omega.vercel.app/",
    code: "https://github.com/ErysCode7/cocktails",
  },
  {
    image: Blog,
    title: "Blog App",
    text: "Blog application in React JS using react router dom with localstorage",
    site: "https://blog-app-azure.vercel.app/",
    code: "https://github.com/ErysCode7/blog-app",
  },
  {
    image: TodoList,
    title: "Todolist App",
    text: "Todolist app in React JS using local storage",
    site: "https://todolist-app-nu.vercel.app/",
    code: "https://github.com/ErysCode7/todolist-app",
  },
  {
    image: AdviceGenerator,
    title: "Advice generator App",
    text: "Advice Generator App allows the user to see random advice. Built with HTML, CSS, SASS, JavaScript and Advice Slip API.",
    site: "https://eryscode7.github.io/advice-generator-app/",
    code: "https://github.com/ErysCode7/advice-generator-app",
  },
  {
    image: EdieHomepage,
    title: "Edie homepage",
    text: "Landing page made in React JS and Material UI design",
    site: "https://edie-landing-page.vercel.app/",
    code: "https://github.com/ErysCode7/edie-landing-page",
  },
  {
    image: Royals,
    title: "Royals Landing Page",
    text: "Landing Page using JavaScript Intersection Observer API",
    site: "https://eryscode7.github.io/royals-landing-page/",
    code: "https://github.com/ErysCode7/royals-landing-page",
  },
  {
    image: FrontendDocumentation,
    title: "Frontend Documentation",
    text: "Personal blog Technical Documentation Page",
    site: "https://eryscode7.github.io/frontend-documentation/",
    code: "https://github.com/ErysCode7/frontend-documentation",
  },
  {
    image: GithubGeneratorApp,
    title: "Github Generator App",
    text: "Github user search app using GitHub API",
    site: "https://eryscode7.github.io/github-generator-app/",
    code: "https://github.com/ErysCode7/github-generator-app",
  },
  {
    image: GPT3,
    title: "GPT3",
    text: "Modern UI UX Website made in React",
    site: "https://gpt3-modern-web.vercel.app/",
    code: "https://github.com/ErysCode7/gpt3",
  },
  {
    image: SpaceWebsite,
    title: "Space tourism website",
    text: "Frontend Mentor Challenges Multi Page Website",
    site: "https://eryscode7.github.io/space-tourism/",
    code: "https://github.com/ErysCode7/space-tourism",
  },
  {
    image: EasyBank,
    title: "EasyBank landing apge",
    text: "Frontend Mentor Challenges Landing Page made with HTML, CSS, SASS and JavaScript.",
    site: "https://eryscode7.github.io/easybank-landing-page/",
    code: "https://github.com/ErysCode7/easybank-landing-page",
  },
  {
    image: Toyota,
    title: "Toyota",
    text: "Toyota UI design",
    site: "https://eryscode7.github.io/Toyota/",
    code: "https://github.com/ErysCode7/Toyota",
  },
];

export default ProjectDetails;
