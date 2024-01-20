import React, { useEffect, useState } from 'react';

const API_KEY = 'AIzaSyALWdN9q_mGZLYr9kq5qFZQcynf5gg84o8';
const channelID = 'UChlkraELSM_KE8CQ0W4vwGg';
const fetchURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResult=10`;

export default function YtVideos() {
  const [allVideos, setAllVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(fetchURL)
      .then((response) => response.json())
      .then((resJson) => {
        if (resJson.items) {
          const result = resJson.items.map((doc) => ({
            ...doc,
            VideoLink: `https://www.youtube.com/embed/${doc?.id?.videoId}`,
          }));
          setAllVideos(result);
        } else {
          setError('API response does not contain "items" property');
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setError('Error fetching videos: ' + error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      {isLoading ? (
        <p>Loading videos...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          {allVideos.map((item) => (
            <div key={item.id.videoId} className="h-96 rounded-lg bg-gray-200 overflow-hidden">
              <p className="text-center text-white bg-gray-800 p-2">{item.snippet.title}</p>
              <iframe
                width="100%"
                height="100%"
                src={item?.VideoLink}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
