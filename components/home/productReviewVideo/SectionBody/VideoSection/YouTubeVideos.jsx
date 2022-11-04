import styled from "styled-components";
import Video from './Video'

const YoutubeVideosStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const YoutubeVideos = () => {
  return (
    <YoutubeVideosStyle>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </YoutubeVideosStyle>
  );
};

export default YoutubeVideos;
