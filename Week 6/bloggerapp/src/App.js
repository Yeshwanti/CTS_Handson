import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";
import "./App.css";

function App() {

  const show = true;

  return (

    <div className="container">

      {show && <CourseDetails />}

      {show ? <BookDetails /> : null}

      <BlogDetails />

    </div>

  );

}

export default App;