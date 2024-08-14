import Styles from "./styles.module.css";
import Searchbar from "../Searchbar";
import Companies from "../Companies";
import Categories from "../Categories";
import JobList from "../JobList";

function Main() {
  return (
    <>
      <Searchbar />
      <Companies />
      <Categories />
      <JobList />
    </>
  );
}

export default Main;
