import Artifact from "../components/Artifact";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import useAxiosSecure from "../Hooks/useAxiosHook";

export default function AllArtifactsPage() {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [allArtifacts, setAllArtifacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(
        `/allArtifacts?search=${search}`
      )
      .then((res) => {
        setAllArtifacts(res.data);
        setLoading(false);
      });
  }, [search]);

  useEffect(() => {
    document.title = "LiQuest || All Artifacts";
  }, []);
  
  return (
    <div className="w-full bg-CharcoalGreen py-20">
      <div className="container w-11/12 mx-auto">
        <div className="mb-20">
          <motion.h2
            animate={{ color: ["rgb(20, 133, 135)", "#fff", "rgb(20, 133, 135)"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl lg:text-6xl text-white font-semibold text-center mb-5"
          >
            All Artifacts
          </motion.h2>
          <p className="lg:w-[65%] mx-auto text-center text-LightGray">
            Explore the fascinating array of artifacts, each with a unique story from history.
          </p>
        </div>
        <div className="flex  items-center justify-center mb-20">
          {/* Search Input */}
          <div className="border-[1px] border-TealBlueGreen rounded-xl flex items-center w-[100%] lg:w-[50%] mb-5 lg:mb-0">
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="search"
              placeholder="Search"
              className="bg-transparent py-2 px-5 focus:outline-none flex-1"
            />
            <button className="hidden lg:block bg-TealBlueGreen rounded-r-xl py-2 px-5 text-white text-lg">
              Search
            </button>
          </div>

  
        
        </div>

        <div>
          {loading ? (
            <div className="flex justify-center items-center h-[300px]">
              <span className="loading loading-ring loading-xs text-TealBlueGreen"></span>
              <span className="loading loading-ring loading-sm text-TealBlueGreen"></span>
              <span className="loading loading-ring loading-md text-TealBlueGreen"></span>
              <span className="loading loading-ring loading-lg text-TealBlueGreen"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {allArtifacts.map((artifact) => (
                <Artifact key={artifact._id} artifact={artifact}></Artifact>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
