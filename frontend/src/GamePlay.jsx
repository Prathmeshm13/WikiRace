import React, { useEffect, useState } from "react";
import useWikiLinks from "./wikiLinks";
import LinkList from "./linkList";
import SearchComponent from "./searchBox";

function GamePlay() {
  let [currLink, setCurrLink] = useState("Nagpur");
  let [moves, setMoves] = useState(0);
  let [searchLink, setSearchLink] = useState();
  let [linkStatus, setLinkStatus] = useState("");

  // Use the custom hook to fetch links
  const { links, loading } = useWikiLinks(currLink);

  useEffect(() => {
    console.log(links); // Logs updated links when 'links' changes
  }, [links]);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  function handleSearch(e) {
    if (links.includes(searchLink.trim().toLowerCase())) {
      setLinkStatus("Present");
      setMoves((prevMoves) => prevMoves + 1);
      setCurrLink(searchLink);
    } else {
      setLinkStatus("Not Present");
    }
    console.log(e.target.value);
  }
  function handleInputChange(e) {
    setSearchLink(e.target.value);
  }
  return (
    <>
      <h1>GamePlay</h1>
      <h2>Moves: {moves}</h2>
      <div className="flex">
        <div
          className="wikiContent"
          style={{ display:"flex",position: "relative", border: "2px solid black" }}
        >
          <iframe
            src={`https://en.wikipedia.org/wiki/${currLink}`}
            style={{
              width: "1000px",
              height: "500px",
              border: "none",
              zIndex: 1,
            }}
            title="Wikipedia Page"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "980px",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              zIndex: 10,
            }}
          ></div>{" "}
        </div>
        <div className="flex-col">
          <SearchComponent data={links}/>
        </div>
      </div>
      <div className="flex items-center justify-center p-7">
        <h1 className="pr-6 font-semibold">Enter your next link:</h1>
        <input
          onChange={(e) => setSearchLink(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs pl-4"
        />
        <button class="btn ml-5" onClick={handleSearch} value={searchLink}>
          Go to next Link
        </button>
        <h1>{linkStatus}</h1>
      </div>
    </>
  );
}

export default GamePlay;
