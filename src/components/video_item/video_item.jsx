import React from 'react';
import styles from './video_item.module.css';

const VideoItem = props => {
  return (
    <li className={styles.li}>
      <img
        className={styles.img}
        src={props.video.snippet.thumbnails.medium.url}
        alt="thumbnails"
      />
      <div className={styles.info}>
        <span className={styles.title}>{props.video.snippet.title}</span>
        <span className={styles.channelTitle}>
          {props.video.snippet.channelTitle}
        </span>
        <span className={styles.views}>
          {/* {(function () {
            if (props.video.statistics.viewCount > 1000000) {
              return `${Math.floor(
                props.video.statistics.viewCount / 100000
              )}M views`;
            } else if (props.video.statistics.viewCount > 1000) {
              return `${Math.floor(
                props.video.statistics.viewCount / 1000
              )}K views`;
            } else {
              return `${props.video.statistics.viewCount} views`;
            }
          })()} */}
        </span>
      </div>
    </li>
  );
};

export default VideoItem;
