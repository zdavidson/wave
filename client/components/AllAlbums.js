import React from "react";
import Album from "./Album";

export default function AllAlbums(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch("/api/albums")
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
    fetchData();
  }, []);

  return (
    <div id="albums" className="row wrap">
      <Album data={props.data} clickHandler={props.clickHandler} />
    </div>
  );
}
