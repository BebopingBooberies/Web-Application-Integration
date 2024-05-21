import literature from './img/literature.jpg';
import styles from './generalCSS.css';
//import 'bootstrap/dist/css/bootstrap.css';width="90%" height="auto"

/**
 * Home page component
 *
 * This is the main landing page for the application.
 * Information on here will not only specify that this website does not have anny connection to the conference, but will
 * give full credit to the art used on this page with a link to the original source
 *
 * @author Kelsey Andrews, John Rooksby
 */
function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <br/>
            <img src={literature} alt="wall of books with a ladder on the side" />
            <div>
                <h2>Overview</h2>
                <p>This app has been created to help users to look at what papers were released from the 2021 CHI PLAY conferece.
                This app is not associated with the CHI PLAY, nor is it in association with any of their sponsors.
                The main aim is to showcase the papers brought up within the conference and their usages.
                <br/>
                    all credit for the image above goes to Pixabay. link to original source:
                </p>
                <a href="https://www.pexels.com/photo/bookcase-books-bookshop-bookstore-220326/">Brown Wooden Ladder on Brown Wooden Bookshelf</a>
            </div>
            <p>Welcome to the home page!</p>
        </div>
    );
}

export default HomePage;
