import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSpotifyAuth } from './useSpotifyAuth';

export default function SpotifyData() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [recentTracks, setRecentTracks] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const { token } = useSpotifyAuth();

  useEffect(() => {
    if (!token) return;

    const fetchCurrentTrack = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
          headers: { 'Authorization': `Bearer ${token}` },
        });

        if (response.status === 204) {
          setCurrentTrack(null);
          return;
        }

        const track = response.data.item;
        if (track) {
          setCurrentTrack({
            id: track.id,
            name: track.name,
            artist: track.artists.map(a => a.name).join(', '),
            album: track.album.name,
            albumImageUrl: track.album.images[0].url,
            spotifyUrl: track.external_urls.spotify,
          });
        }
      } catch (err) {
        console.error('Error fetching current track:', err);
        setCurrentTrack(null);
      }
    };

    fetchCurrentTrack();
  }, [token]);

  useEffect(() => {
    if (!token) return;

    const fetchRecentTracks = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=5', {
          headers: { 'Authorization': `Bearer ${token}` },
        });

        const tracks = response.data.items.map(item => ({
          id: item.track.id,
          name: item.track.name,
          artist: item.track.artists.map(a => a.name).join(', '),
          album: item.track.album.name,
          albumImageUrl: item.track.album.images[0].url,
          spotifyUrl: item.track.external_urls.spotify,
        }));

        setRecentTracks(tracks);
      } catch (err) {
        console.error('Error fetching recent tracks: ', err);
      }
    };

    fetchRecentTracks();
  }, [token]);

  useEffect(() => {
    if (!token) return;

    const fetchTopTracks = async () => {
      try {
        const response = await axios.get(
          'https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term',
          { headers: { 'Authorization': `Bearer ${token}` } }
        );

        const tracks = response.data.items.map(item => ({
          id: item.id,
          name: item.name,
          artist: item.artists.map(a => a.name).join(', '),
          album: item.album.name,
          albumImageUrl: item.album.images[0].url,
          spotifyUrl: item.external_urls.spotify,
        }));

        setTopTracks(tracks);
      } catch (err) {
        console.error('Error fetching top tracks:', err);
      }
    };

    fetchTopTracks();
  }, [token]);

  return (
    <div className="p-4 space-y-6">
      <section>
        <h2 className="text-xl font-semibold mb-2">Now Playing</h2>
        {currentTrack ? (
          <div className="flex items-center space-x-4">
            <img src={currentTrack.albumImageUrl} alt={currentTrack.album} className="w-16 h-16" />
            <div>
              <p className="font-bold">{currentTrack.name}</p>
              <p className="text-sm text-gray-500">{currentTrack.artist}</p>
            </div>
          </div>
        ) : (
          <p>No track is currently playing.</p>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Recent Tracks</h2>
        <ul className="space-y-2">
          {recentTracks.map(track => (
            <li key={track.id} className="flex items-center space-x-4">
              <img src={track.albumImageUrl} alt={track.album} className="w-12 h-12" />
              <div>
                <p className="font-medium">{track.name}</p>
                <p className="text-sm text-gray-500">{track.artist}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Top Tracks</h2>
        <ul className="space-y-2">
          {topTracks.map(track => (
            <li key={track.id} className="flex items-center space-x-4">
              <img src={track.albumImageUrl} alt={track.album} className="w-12 h-12" />
              <div>
                <p className="font-medium">{track.name}</p>
                <p className="text-sm text-gray-500">{track.artist}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}