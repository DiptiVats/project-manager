import NoPorjectSelected from "./component/NoPorjectSelected";
import ProjectsSideBar from "./component/ProjectsSideBar";
//import NoPorject
function App() {
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectsSideBar />
      <NoPorjectSelected />
    </main>
  );
}
export default App;
