import React, { useState } from 'react'
import styles from './styles.module.css'

const Youtube = (props) => {
  const { videoId, width, height, imgSize, autoplay } = props
  const [showVideo, setShowVideo] = useState(false)
  return (
    <React.Fragment>
      {showVideo ? (
        <iframe
          width={width || '100%'}
          height={height || '400px'}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&showinfo=0`}
          frameBorder='0'
          allowFullScreen
          autoplay={autoplay}
        ></iframe>
      ) : (
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${`https://img.youtube.com/vi/${videoId}/${
              imgSize || 'mqdefault'
            }.jpg`})`,
            width,
            height
          }}
          onClick={() => setShowVideo(true)}
        >
          <div className={styles.playButton} />
        </div>
      )}
    </React.Fragment>
  )
}
export default Youtube
