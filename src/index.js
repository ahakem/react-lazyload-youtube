import React, { useState } from 'react'
import styles from './styles.module.css'

const Youtube = (props) => {
  const {videoId, width, height} = props
  const [showVideo, setShowVideo] = useState(false);
  return (
    <React.Fragment>
      {showVideo ? (
          <iframe
            width={width? width : "100%"}
            height={height? height : "400px"}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&showinfo=0`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
      ) : (
        <a className={styles.videoImg} onClick={() => setShowVideo(true)}>
          <div className={styles.playButton}></div>
          <img
            src={`https://img.youtube.com/vi/${videoId}/sddefault.jpg`}
          />
        </a>
      )}
    </React.Fragment>
  )
}
export default Youtube
