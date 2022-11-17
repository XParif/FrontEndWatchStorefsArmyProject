import styled from "styled-components";
import Video from './Video'
import { justifySpaceBetween } from './../../../../../utils/display.styled';

const YoutubeVideosStyle = styled.div`
  ${justifySpaceBetween}
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
