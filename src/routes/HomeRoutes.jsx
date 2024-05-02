import HomeLayout from '../Home/layout/HomeLayout';
import Home from '../Home/Home';
import AboutUs from '../Home/AboutUs';
import Services from '../Home/Services';
import ContactUs from '../Home/ContactUs';
import PageNotFound from '../Home/PageNotFound';


const HomeRoutes = {
    path: '/',
    element: <HomeLayout />,
    children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/about-us', element: <AboutUs /> },
        { path: '/services', element: <Services /> },
        { path: '/contact-us', element: <ContactUs /> },
        { path: '*', element: <PageNotFound /> },
    ]
};


export default HomeRoutes;