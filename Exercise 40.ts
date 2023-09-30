function makeAlbum(artist: string, title: string, tracks?: number): Record<string, any> {
    const album: Record<string, any> = {
        artist: artist,
        title: title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Call the function to create three different album objects
const album1 = makeAlbum("Artist1", "Album1");
const album2 = makeAlbum("Artist2", "Album2", 12); // Including number of tracks
const album3 = makeAlbum("Artist3", "Album3");

// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);
