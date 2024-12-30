export type YoutubeViewerProps = {
  className?: string
  width?: number | string
  height?: number | string
  srcId: string
  autoPlay?: boolean
  mute?: boolean
  noControl?: boolean
}

export const YoutubeViewer = ({
  className = '',
  width,
  height,
  srcId,
  autoPlay = false,
  mute = true,
  noControl = false
}: YoutubeViewerProps) => {
  const autoPlayPath = autoPlay ? '&autoplay=1' : ''
  const mutePath = mute ? '&mute=1' : ''
  const noControlPath = noControl ? '&controls=0' : ''

  return (
    <iframe
      className={className}
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${srcId}${autoPlayPath}${mutePath}${noControlPath}`}
      title="YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      id="ytplayer"
    />
  )
}
