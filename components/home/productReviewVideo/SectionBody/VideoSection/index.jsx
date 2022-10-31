import styled from "styled-components";
import YoutubeVideos from './YouTubeVideos'
import CustomButton from './CustomButton'

const VideoSectionStyle = styled.div``;

const VideoSection = () => {
  return (
    <VideoSectionStyle>
      <YoutubeVideos />
      <CustomButton/>
    </VideoSectionStyle>
  );
};

export default VideoSection;
