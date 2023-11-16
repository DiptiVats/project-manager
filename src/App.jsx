import NewProject from "./component/NewProjects";
import ProjectsSideBar from "./component/ProjectsSideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectsSideBar />
      <NewProject />
    </main>
  );
}
export default App;
