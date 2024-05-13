import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data.followers);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();
  return (
    <div className="flex justify-center items-center">
      <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4 flex flex-col items-center w-4/12 ">
        Github Followers: {data.followers}
        <img
          className="m-2 w-[300px]"
          src={data.avatar_url}
          alt="Git Picture"
        />
      </div>
    </div>
  );
}

export default Github;

export const gitHubData = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
