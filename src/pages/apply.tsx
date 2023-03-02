import React, { useState } from 'react';
import Flex from '@/components/Flex';
import Layout from '@/components/Layout';
import Text from '@/components/Text';
import { Container, Main, Section } from '@/assets/styles';
import {
  CardContainer,
  CardBody,
  CardDesc,
  CardTitle,
  Selector,
  ApplyBtn,
} from '@/assets/styles/apply.styles';
import SwitchSelector from 'react-switch-selector';

const Apply = () => {
  const [isDesigner, setIsDesigner] = useState(true);
  const options = [
    {
      label: `디자이너`,
      value: `디자이너`,
      selectedBackgroundColor: `#000000`,
    },
    {
      label: `개발자`,
      value: `개발자`,
      selectedBackgroundColor: `#00009C`,
    },
  ];

  const onChange = (newValue: any) => {
    setIsDesigner(newValue === `디자이너`);
  };

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === `디자이너`,
  );

  return (
    <Layout>
      <Main>
        <Section backgroundImageSrc="/apply.png">
          <Container>
            <Flex
              flexDirection="column"
              gap={18}
              style={{
                paddingTop: 28,
                paddingBottom: 30,
                paddingLeft: 10,
              }}
            >
              <Text size={20} weight="bold" lineHeight={`145%`}>
                배는 항구에 있어서 가장 안전하지만, <br />
                그것은 배의 존재이유가 아닙니다
              </Text>
              <Text
                size={14}
                weight="lighter"
                lineHeight={`140%`}
                style={{ paddingRight: 40 }}
              >
                WIT는 뚜렷한 목표를 가진 사람들이 모여 성장하고 있습니다.
                <br />
                가슴이 설레시나요? 지금이 바로 WIT에 합류할 때입니다.
              </Text>
            </Flex>
          </Container>
        </Section>
        <Section>
          <Container>
            <Flex
              flexDirection="column"
              justifyContent={`center`}
              alignItems="center"
              gap={38}
              style={{
                marginBottom: 80,
                paddingTop: 56,
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <Text size={21} color={`#000`}>
                지원
              </Text>
              <div
                style={{
                  width: `100%`,
                  // height: `200px`,
                  display: `grid`,
                  gridTemplateColumns: `repeat(2, 1fr)`,
                  gap: 10,
                }}
              >
                <Card title="모집기간">
                  wit는 1년에 한번 장기 프로젝트를 책임감 있게 함께할 동아리원을
                  모집합니다
                </Card>
                <Card
                  title="지원자격"
                  desc="* 휴학·유예 여부와 관계없이    
                지원가능합니다."
                >
                  긴시간 함께 하는데 문제가 없고, 평소 소통과 협업을 즐기는
                  건국대학교 학생 누구나 지원할 수 있습니다
                </Card>
              </div>
            </Flex>
            <Flex
              flexDirection="column"
              justifyContent={`center`}
              alignItems="center"
              gap={38}
              style={{
                marginBottom: 80,
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <Text size={21} color={`#000`}>
                지원
              </Text>
              <div
                style={{
                  width: `100%`,
                  display: `grid`,
                  gridTemplateColumns: `repeat(2, 1fr)`,
                  gap: 10,
                  // height: 100,
                }}
              >
                <Card title="서류접수">2023. 03. 06. (월) ~03. 13. (월)</Card>
                <Card title="최종 결과 발표">2023. 03. 24. (금)</Card>
              </div>
            </Flex>
            <Flex
              flexDirection="column"
              justifyContent={`center`}
              alignItems="center"
              gap={38}
              style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 100 }}
            >
              <Text size={21} color={`#000`}>
                모집 분야
              </Text>
              <Selector>
                <SwitchSelector
                  onChange={onChange}
                  options={options}
                  initialSelectedIndex={initialSelectedIndex}
                  backgroundColor={`#F8F8F8`}
                  fontColor={`#000000`}
                />
              </Selector>
              <Card title="모집조건">
                {isDesigner ? (
                  <>
                    - 건국대학교 재학생
                    <br />
                    - 정기적으로 위트 팀회의에 참여가 가능하신 분<br />-
                    기획부터 디자인 개발까지 하나의 프로젝트를 완성해보고 싶은
                    분
                  </>
                ) : (
                  <>
                    - 건국대학교 재학생
                    <br />
                    - 정기적으로 위트 팀회의에 참여가 가능하신 분<br />
                    - 전공 무관 끈기가 있고 연락이 잘 되는 분<br />- ‘어려운
                    문제’를 해결해보고 싶은 분
                  </>
                )}
              </Card>
              <Card title="우대사항">
                {isDesigner ? (
                  <>
                    - UX 디자인 관련 수업 경험이 있는 분 <br />
                    - 포트폴리오 제출이 가능한 분<br />
                    - 개발자와의 협업 경험이 있는 분 <br />- 스타트업 인턴/근무
                    경험이 있는 분
                  </>
                ) : (
                  <>
                    <b>프론트엔드</b> <br />- 깃허브와 같은 코드형상관리툴을
                    사용해보신 분 <br />- React 사용 경험이 있으신 분 <br /> -
                    HTML5, CSS, SCSS 마크업 기술에 대한 이해가 있는 분 <br />
                    <b>백엔드</b> <br />- 터미널(cli) 사용에 능숙한 분
                    <br />- gcp 및 aws같이 클라우드 플랫폼을 써본 분 <br /> -
                    간단한 도메인 구조 또는 스키마를 짜본 분
                  </>
                )}
              </Card>
              <ApplyBtn isDesigner={isDesigner}>
                <a
                  href={
                    isDesigner
                      ? `https://forms.gle/t3gN9u1AczpVhrHb6`
                      : `https://forms.gle/7rR4PguQFPzLKtof7`
                  }
                >
                  지원하기
                </a>
              </ApplyBtn>
            </Flex>
          </Container>
        </Section>
      </Main>
    </Layout>
  );
};

const Card = ({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children: React.ReactNode;
}) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <Flex flexDirection="column" gap={4}>
        <CardBody>{children}</CardBody>
        {desc && <CardDesc>{desc}</CardDesc>}
      </Flex>
    </CardContainer>
  );
};

export default Apply;
