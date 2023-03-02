import styled from 'styled-components';

const CardContainer = styled.div`
  background: #f8f8f8;
  border-radius: 10px;
  padding: 10px 6px 0 10px;
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  padding-bottom: 10px;
`;

const CardTitle = styled.span`
  font-weight: 700;
  font-size: 15px;
  line-height: 169%;
  color: #000000;
`;

const CardBody = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 169%;
  color: #000000;

  b {
    font-weight: bold;
  }
`;

const CardDesc = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 130%;
  color: #afafaf;
`;

const Selector = styled.div`
  width: 60vw;
  height: 40px;

  .react-switch-selector-wrapper {
    border-radius: 50px;
  }

  div {
    border-radius: 50px;
  }
`;

const ApplyBtn = styled.button<{ isDesigner: boolean }>`
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
  background: ${({ isDesigner }) => (isDesigner ? `#000` : `#00009c`)};
  border-radius: 50px;
  padding: 11px 26px;
  transition: 0.2s;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export { CardContainer, CardTitle, CardBody, CardDesc, Selector, ApplyBtn };
