import React from "react";
import "./AlbumItem.css";

const AlbumItem = ({ album: {title, albumTitle, thumbnailUrl} }) => (
    <li className="album-item">
        <img src={thumbnailUrl}></img>
        <span>
            <h2>{albumTitle}</h2>
            <h3>{title}</h3>
        </span>
    </li>
);

export default AlbumItem;
