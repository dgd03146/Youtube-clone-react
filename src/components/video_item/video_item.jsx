import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(({ video, video: { snippet }, onVideoClick }) => {
  let he = require('he');
  snippet.title = he.decode(snippet.title);
  return (
    <li className={styles.li}>
      <img
        className={styles.img}
        src={snippet.thumbnails.medium.url}
        alt="thumbnails"
        onClick={() => onVideoClick(video)}
      />
      <div className={styles.info}>
        <span className={styles.title}>{snippet.title}</span>
        <span className={styles.channelTitle}>{snippet.channelTitle}</span>
      </div>
    </li>
  );
});

export default VideoItem;
