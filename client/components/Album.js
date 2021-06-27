import React from "react";

const albumData = [
  {
    id: 2,
    name: "Zenith",
    artworkUrl:
      "https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/zenith.jpeg",
    createdAt: "2021-06-25T11:40:10.572Z",
    updatedAt: "2021-06-25T11:40:10.572Z",
    artistId: 1,
    artist: {
      id: 1,
      name: "Dexter Britain",
      createdAt: "2021-06-25T11:40:10.549Z",
      updatedAt: "2021-06-25T11:40:10.549Z",
    },
  },
  {
    id: 1,
    name: "Creative Commons Volume 2",
    artworkUrl:
      "https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/creative_commons_vol_2.jpeg",
    createdAt: "2021-06-25T11:40:10.567Z",
    updatedAt: "2021-06-25T11:40:10.567Z",
    artistId: 1,
    artist: {
      id: 1,
      name: "Dexter Britain",
      createdAt: "2021-06-25T11:40:10.549Z",
      updatedAt: "2021-06-25T11:40:10.549Z",
    },
  },
  {
    id: 3,
    name: "No Nations (Instrumentals)",
    artworkUrl:
      "https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/no_nations.jpeg",
    createdAt: "2021-06-25T11:40:10.575Z",
    updatedAt: "2021-06-25T11:40:10.575Z",
    artistId: 2,
    artist: {
      id: 2,
      name: "Jets Overhead",
      createdAt: "2021-06-25T11:40:10.562Z",
      updatedAt: "2021-06-25T11:40:10.562Z",
    },
  },
  {
    id: 5,
    name: "The Slip",
    artworkUrl:
      "https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/the_slip.jpeg",
    createdAt: "2021-06-25T11:40:10.579Z",
    updatedAt: "2021-06-25T11:40:10.579Z",
    artistId: 3,
    artist: {
      id: 3,
      name: "Nine Inch Nails",
      createdAt: "2021-06-25T11:40:10.564Z",
      updatedAt: "2021-06-25T11:40:10.564Z",
    },
  },
  {
    id: 4,
    name: "Ghosts I-IV",
    artworkUrl:
      "https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/ghosts_i-iv.jpeg",
    createdAt: "2021-06-25T11:40:10.577Z",
    updatedAt: "2021-06-25T11:40:10.577Z",
    artistId: 3,
    artist: {
      id: 3,
      name: "Nine Inch Nails",
      createdAt: "2021-06-25T11:40:10.564Z",
      updatedAt: "2021-06-25T11:40:10.564Z",
    },
  },
];

export default function Album(props) {
  const clickHandler = props.clickHandler;
  return (
    <>
      {albumData.map((album) => {
        return (
          <div key={album.id} className="album">
            <a onClick={clickHandler}>
              <img src={album.artworkUrl} />
              <p>{album.name}</p>
              <small>{album.artist.name}</small>
            </a>
          </div>
        );
      })}
    </>
  );
}
