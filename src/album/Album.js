// export default class Album {
//     constructor(id, title, thumbnailUrl) {
//         this.id = id;
//         this.title = title;
//         this.thumbnailUrl = thumbnailUrl || "";
//     }
// }

import React from 'react';
import AlbumList from './AlbumList';

export default class Album extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        }
    }

    async componentDidMount() {
        try {
            const albums = await fetch('https://jsonplaceholder.typicode.com/albums')
                                .then(response => response.json());
                                
            if (albums.length) {
                const photos = await fetch('https://jsonplaceholder.typicode.com/photos')
                                    .then(response => response.json());
                const albumWithImg = photos.reduce((arr, photo, idx) => {
                    arr[idx] = {...photo, 'albumTitle': albums[photo.albumId - 1]["title"]};
                    return arr;
                }, []);
                this.setState({albums: albumWithImg});
            }
        }
        catch(err) {
            this.setState({albums: []});
        }
    }

    renderContent() {
        const { albums } = this.state;
        if (albums.length) {
            return (<AlbumList albums={albums}/>)
        }
        return (<div><h1>Loading.......</h1></div>);
    }

    render() {
        return this.renderContent();
    }
}