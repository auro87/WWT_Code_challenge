import React from "react";
import AlbumItem from "./AlbumItem";
import "./AlbumList.css";

const AlbumList = ({ albums }) => (
    <ul className="album-list">
        {albums.map(album => (
            <AlbumItem key={album.id} album={album}/>
        ))}
    </ul>
);

export default AlbumList;
