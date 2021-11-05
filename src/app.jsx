import { useEffect, useState } from 'react';
import './App.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideo] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyCPbzL0dj-lklB6dc5L3qQ3Bl-E-_TkM8o',
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideo(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return <VideoList videos={videos} />;
}

export default App;
