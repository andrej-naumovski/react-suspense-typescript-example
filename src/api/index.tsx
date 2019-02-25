export interface Image {
  size: string;
  ['#text']: string;
}

export interface Artist {
  name: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: Array<Image>;
}

interface ArtistsResponse {
  topartists: {
    artist: Array<Artist>;
  }
}

interface ArtistResponse {
  artist: Artist;
}

export interface Album {
  name: string;
  playcount: string;
  image: Array<Image>;
}

interface TopAlbumsResponse {
  topalbums: {
    album: Array<Album>;
  }
}

export const fetchTopArtists = (): Promise<Array<Artist>> =>
  fetch('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=2204dec2ead1a4a6c3ff22e0e1f0d08f&format=json')
    .then(response => response.json())
    .then(response => { console.log(response); return response; })
    .then((response: ArtistsResponse) => response.topartists.artist);

export const fetchArtistDetails = (name: string): Promise<Artist> =>
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=2204dec2ead1a4a6c3ff22e0e1f0d08f&format=json`)
    .then(response => response.json())
    .then((response: ArtistResponse) => response.artist);

export const fetchArtistTopAlbums = (name: string): Promise<Array<Album>> =>
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=2204dec2ead1a4a6c3ff22e0e1f0d08f&format=json`)
    .then(response => response.json())
    .then((response: TopAlbumsResponse) => response.topalbums.album);
