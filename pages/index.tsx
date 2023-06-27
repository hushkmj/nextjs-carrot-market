import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <div className="border-4">
        <form className="flex flex-col space-y-2 p-5">
          <input type="text"
            required
            placeholder="Username"
            className="peer border p-1 border-gray-400 rounded-lg" />
          <span className="hidden peer-invalid:block text-red-500">This input is invalid</span>
          <span className="hidden peer-valid:block text-teal-500">Awesome Username</span>
          <span className="hidden peer-hover:block text-amber-500">hi</span>
          <input type="submit" value={"Login"} className="bg-white" />
        </form>
      </div>
      <details className="select-none open:text-white open:bg-green-400">
        <summary className="cursor-pointer">What is my fav. food.</summary>
        <span>kimchi</span>
      </details>
      <ul className="list-disc marker:text-teal-500">
        <li>hi</li>
        <li>hello</li>
        <li>안녕</li>
      </ul>
      <input type="file" className="file:cursor-pointer file:hover:text-purple-500 file:hover:bg-white file:hover:border-purple-500 file:hover:border file:transition-colors file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-500" name="" id="" />
      <p className="first-letter:text-5xl first-letter:hover:text-purple-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod porro dignissimos quidem minus provident optio autem ullam quasi labore? At, odio incidunt facilis quasi harum labore reprehenderit molestias quae nisi.</p>
    </div>
  );
};

export default Home;