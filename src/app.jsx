import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = useCallback(video => {
    setSelectedVideo(video);
  }, []);

  const search = useCallback(
    query => {
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then(videos => {
          setVideos(videos); //비디오가 받아지면 받아온 videos를 setVideos에 업데이트한다. 프로미스 리턴이 됨.
        });
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //가독성 좋게하려고 주석넣음.
      .then(videos => setVideos(videos)); //
  }, [youtube]);

  return (
    <div>
      <Header onSearch={search} />
      <div className={styles.line}></div>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} />;
        </div>
      </section>
    </div>
  );
}

export default App;
