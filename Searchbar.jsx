import { useEffect, useState } from "react";

export default function Searchbar() {
  const handlesearch = () => {};
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetcheddata = async () => {
    const val = await fetch(
      `https://dummyjson.com/products/search?q=${search}`
    );
    const res = await val.json();
    setData(res.products);
  };

  useEffect(() => {
    fetcheddata();
  }, [search]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </div>
    </div>
  );
}
