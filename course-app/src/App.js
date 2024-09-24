import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter"
import { apiUrl, filterData } from "./data";
import { useState, useEffect } from "react";
import Spinner from "./Components/Spinner";
import { toast } from "react-toastify";
import Cards from "./Components/Cards";

const App = () => {
  const [courses, setCourses] = useState([]);
  // console.log("inside app");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");

  // useEffect(()=>{
  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Something went wrong :: ", error);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="min-h-screenflex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} setCategory={setCategory} />
      </div>
      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
        }
      </div>
    </div>
  );
}

export default App;
