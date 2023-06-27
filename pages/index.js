import Layout from "../pages/Layout";
import Image from "next/image";

function Home() {
  return (
    <div>
      <Layout></Layout>
      <div class="font-mono flex w-full h-full">
        <div>
          <Image
            src="/parker.png"
            alt="Profile picture"
            class="mt-32 ml-64 rounded-full border-2 border-white"
            width={200}
            height={200}
          />
        </div>
        <div class="w-96 h-32 m-40 p-8  ">
          "Hello homies, it's me Tom Holland, And I'm the one playing the role
          of spiderman as Peter Parker."
        </div>
      </div>
    </div>
  );
}

export default Home;
