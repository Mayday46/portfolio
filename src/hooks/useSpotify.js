import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSpotifyAuth } from './useSpotifyAuth';

export function useSpotify() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [recentTracks, setRecentTracks] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const { token } = useSpotifyAuth();

  useEffect(() => {
    if (!token) return;

    const fetchCurrentTrack = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
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
            artist: track.artists.map(artist => artist.name).join(', '),
            album: track.album.name,
            albumImageUrl: track.album.images[0].url,
            spotifyUrl: track.external_urls.spotify,
          });
        }
      } catch (error) {
        console.error('Error fetching current track:', error);
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
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.data && response.data.items) {
          const tracks = response.data.items.map(item => ({
            id: item.track.id,
            name: item.track.name,
            artist: item.track.artists.map(artist => artist.name).join(', '),
            album: item.track.album.name,
            albumImageUrl: item.track.album.images[0].url,
            spotifyUrl: item.track.external_urls.spotify,
          }));
          setRecentTracks(tracks);
        }
      } catch (error) {
        console.error('Error fetching recent tracks:', error);
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
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );

        if (response.data && response.data.items) {
          const tracks = response.data.items.map(item => ({
            id: item.id,
            name: item.name,
            artist: item.artists.map(artist => artist.name).join(', '),
            album: item.album.name,
            albumImageUrl: item.album.images[0].url,
            spotifyUrl: item.external_urls.spotify,
          }));
          setTopTracks(tracks);
        }
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      }
    };

    fetchTopTracks();
  }, [token]);

  return {
    currentTrack,
    recentTracks,
    topTracks,
  };
}