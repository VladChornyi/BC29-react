import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('https://itc.ua/wp-content/uploads/2019/12/star_wars_the_rise_of_skywalker_i00.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  min-height: 600px;
  background-color: rgba(72, 102, 157, 0.5);
`;
