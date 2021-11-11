import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube
      .search(query) //
      .then(videos => setVideos(videos)); //비디오가 받아지면 받아온 videos를 setVideos에 업데이트한다. 프로미스 리턴이 됨.
  };

  useEffect(() => {
    youtube
      .mostPopular() //가독성 좋게하려고 주석넣음.
      .then(videos => setVideos(videos)); //
  }, []);

  return (
    <>
      <Header onSearch={search} />
      <VideoList videos={videos} />;
    </>
  );
}

export default App;
