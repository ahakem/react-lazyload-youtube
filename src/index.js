import React, { useState } from 'react'
import styles from './styles.module.css'

const Youtube = (props) => {
  const { videoId, width, height, imgSize } = props
  const [showVideo, setShowVideo] = useState(false)
  return (
    <React.Fragment>
      {showVideo ? (
        <iframe
          width={width || '100%'}
          height={height || '400px'}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&showinfo=0`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
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
