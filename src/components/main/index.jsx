import Styles from "./styles.module.css";
import Searchbar from "../Searchbar";
import Companies from "../Companies";
import Categories from "../Categories";
import JobList from "../JobList";
import Footer from "../footer";

function Main() {
  return (
    <>
      <Searchbar />
      <Companies />
      <Categories />
      <JobList />
      <Footer />
    </>
  );
}

export default Main;
