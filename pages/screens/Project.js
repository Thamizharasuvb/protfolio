import Header from "../components/Header";
import Footer from "../components/Footer";

function Project() {
  return (
    <div class="bg-blue-100 text-black">
      <Header></Header>
      <div class="p-32">
        <div className="flex h-64 ">
          <div className="box shadow-lg rounded-lg text-center p-8 m-8 bg-gray-100 w-1/3">
            Project 1<div class="p-8 font-sans">Food Cart website</div>
            <button class="hover:text-lg text-blue-600">view source</button>
          </div>
          <div className="box shadow-lg rounded-lg text-center p-8 m-8 bg-gray-100 w-1/3">
            Project 2<div class="p-8 ">A Real time chat Application</div>
            <button class="hover:text-lg text-blue-600">view source</button>
          </div>
          <div className="box shadow-lg rounded-lg text-center p-8 m-8 bg-gray-100 w-1/3">
            Project 3<div class="p-8">Social Media App</div>
            <button class="hover:text-lg text-blue-600">view source</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Project;
