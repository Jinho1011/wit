import {
  Card,
  CardContainer,
  CardImage,
  Container,
  Main,
  Section,
} from '@/assets/styles';
import Layout from '@/components/Layout';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { Helmet } from 'react-helmet';

import { BsChevronDown } from '@react-icons/all-files/bs/BsChevronDown';
import Portfolio from '@/components/Portfolio';
import Logo from '@/assets/Icons/Logo';
import Cell1 from '@/assets/Icons/Cell1';
import Cell2 from '@/assets/Icons/Cell2';
import Event1 from '@/assets/Icons/Event1';
import Event2 from '@/assets/Icons/Event2';
import Event3 from '@/assets/Icons/Event3';

const portfolios = {
  2020: [
    {
      img: `/2020/checku.png`,
      url: `https://trusting-raincoat-f84.notion.site/CheckKU-8aa2d63ad7f94ff59c51f22f1d0ed4cc`,
    },
    {
      img: `/2020/baton.png`,
      url: `https://trusting-raincoat-f84.notion.site/baton-dcdb744b5cbe46a9bc77e5e42c968c81`,
    },
    {
      img: `/2020/wesing.png`,
      url: `https://trusting-raincoat-f84.notion.site/9d95aba603c944ee9cd21b136724e73b`,
    },
    {
      img: `/2020/kuing.png`,
      url: `https://trusting-raincoat-f84.notion.site/fb48580b9ca7449f8d5eb5b0f098960f`,
    },
    {
      img: `/2020/삼삼오오.png`,
      url: `https://trusting-raincoat-f84.notion.site/715baef38246478d936e0a55f51d1db7`,
    },
    {
      img: `/2020/ecomment.png`,
      url: `https://trusting-raincoat-f84.notion.site/Ecommnet-6a2f7b8e3a84401a8ee7448b405a7621`,
    },
  ],
  2021: [
    {
      img: `/2021/mount.png`,
      url: `https://trusting-raincoat-f84.notion.site/Mount-7b3d1d6c95ef41d6ad887b4005bf3006`,
    },
    {
      img: `/2021/ticcle.png`,
      url: `https://trusting-raincoat-f84.notion.site/Ticcle-65e100e7a20e496d905b8f68cfd9effe`,
    },
    {
      img: `/2021/puzzling.png`,
      url: `https://trusting-raincoat-f84.notion.site/Puzzling-919a713bc5cd489896027d086e2a5148`,
    },
  ],
  2022: [
    {
      img: `/2022/studykit.jpg`,
      url: `https://trusting-raincoat-f84.notion.site/ba7bb071ce0341bcb0d12763d38ebadc`,
    },
    {
      img: `/2022/unifesta.jpg`,
      url: `https://trusting-raincoat-f84.notion.site/0245b69a994849aa96e5df6848f159a6`,
    },
    {
      img: `/2022/sullog.jpg`,
      url: `https://trusting-raincoat-f84.notion.site/Sullog-1ecdf430e381415c93d14cd41b4f20c9`,
    },
  ],
};

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>About WIT</title>
        {/* <link
          href="https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo.css"
          rel="stylesheet"
        ></link> */}
        <link rel="preload" as="image" href="/background1.webp"></link>
      </Helmet>
      <Main>
        <Section
          backgroundColor="#0000B1"
          backgroundImageSrc="/background1.webp"
          style={{ height: `100vh` }}
        >
          <Container>
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              style={{ height: `100%` }}
            >
              <Flex
                gap={10}
                alignItems="center"
                style={{
                  width: `100%`,
                  paddingLeft: 26,
                  paddingTop: 20,
                }}
              >
                <a href="/apply" style={{ textDecoration: `none` }}>
                  <Text size={22} style={{ marginRight: 10 }}>
                    apply
                  </Text>
                  <img src="/arrow.png" />
                </a>
              </Flex>
              <Logo />
              <Flex
                flexDirection="column"
                gap={10}
                alignItems="center"
                style={{ paddingBottom: 20 }}
              >
                <Text size={22}>detail</Text>
                <BsChevronDown fill="#ffffff" size={40} />
              </Flex>
            </Flex>
          </Container>
        </Section>
        <Section
          backgroundImageSrc="/section1.png"
          style={{
            height: `100vh`,
          }}
        >
          <Flex
            justifyContent={`center`}
            style={{
              width: `100%`,
              height: `100%`,
              background: `linear-gradient(180deg, #00081C 0%, rgba(0, 8, 28, 0) 100%)`,
            }}
          >
            <Container>
              <Flex
                flexDirection="column"
                justifyContent="space-between"
                style={{
                  height: `100%`,
                }}
              >
                <Flex
                  flexDirection="column"
                  style={{
                    paddingLeft: 10,
                  }}
                >
                  <Text
                    size={40}
                    weight="bold"
                    style={{ paddingTop: 50, paddingBottom: 5 }}
                  >
                    we&apos;re
                  </Text>
                  <Text
                    size={24}
                    weight="normal"
                    style={{ paddingBottom: 24, lineHeight: `124%` }}
                  >
                    The creator that produce
                    <br />
                    what society needs
                  </Text>
                  <Text
                    size={18}
                    weight="lighter"
                    style={{ lineHeight: `169%` }}
                  >
                    wit는 사회가 필요한 서비스를 만든다는 목표를 가지고 활동하는
                    it동아리입니다. wit에서는 동아리원 모두가 한 명 한 명의
                    디자이너, 개발자가 되어 함께 공부하고, 협업하며 최종적으로
                    하나의 서비스를 런칭합니다.
                  </Text>
                </Flex>
                <Flex justifyContent="center">
                  <BsChevronDown
                    fill="#ffffff"
                    size={48}
                    style={{ paddingBottom: 6 }}
                  />
                </Flex>
              </Flex>
            </Container>
          </Flex>
        </Section>
        <Section
          backgroundColor="#000000"
          style={{ paddingBottom: 60 }}
          snapAlign="start"
        >
          <Container>
            <Flex
              flexDirection="column"
              alignItems="center"
              style={{
                width: `100%`,
                paddingTop: 60,
                paddingBottom: 75,
                position: `relative`,
              }}
            >
              <Text size={32} weight={`bolder`}>
                cell.
              </Text>
              <div style={{ position: `absolute`, left: 20, top: 80 }}>
                <Cell1 />
              </div>
              <div style={{ position: `absolute`, right: 20, bottom: 0 }}>
                <Cell2 />
              </div>
            </Flex>
            <Flex
              flexDirection="column"
              alignItems="flex-end"
              gap={4}
              style={{ padding: 12 }}
            >
              <Text size={16} weight={`bold`}>
                1. design cell
              </Text>
              <Text
                size={16}
                style={{ textAlign: `right`, lineHeight: `169%` }}
              >
                디자인셀은 프로젝트의 기획부터 디자인까지
                <br /> 담당하게 되며, 실제 서비스가 개발되는 과정에서
                <br /> 필요한 디자이너의 역할을 경험할 수 있습니다.
              </Text>
            </Flex>
            <div style={{ paddingLeft: 12, paddingRight: 12 }}>
              <img src="/cell.png" style={{ width: `100%` }} />
            </div>
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              gap={4}
              style={{ padding: 12, marginBottom: 60 }}
            >
              <Text size={16} weight={`bold`}>
                2. dev cell
              </Text>
              <Text size={16} style={{ textAlign: `left`, lineHeight: `169%` }}>
                개발셀에서는 프로젝트 진행에 필요한 <br />
                기술적 지식을 쌓고, 실전을 통해 어려운 문제를 <br />
                해결하는 경험을 가질 수 있습니다.
              </Text>
            </Flex>
            <Flex
              flexDirection="column"
              alignItems="center"
              style={{
                width: `100%`,
                paddingTop: 60,
                paddingBottom: 75,
                position: `relative`,
              }}
            >
              <Text size={32} weight={`bolder`}>
                event.
              </Text>
              <div style={{ position: `absolute`, left: 20, top: 0 }}>
                <Event1 />
              </div>
              <div style={{ position: `absolute`, right: 20, bottom: 30 }}>
                <Event2 />
              </div>
              <div style={{ position: `absolute`, left: 20, top: 70 }}>
                <Event3 />
              </div>
            </Flex>
            <CardContainer style={{ marginBottom: 45 }}>
              <Text size={18} weight="bolder">
                WDD
                <br /> 2022.03.16
              </Text>
              <Card>
                <Text
                  size={16}
                  color="#000000"
                  style={{ padding: 10, lineHeight: `157%` }}
                >
                  WDD는 현직에서 일하고 있는 선배들과의 네트워킹 기회를
                  제공합니다. 각 포지션에서 경험한 다양한 이슈들을 다루며, 최신
                  트렌드와 기술에 대해 이야기 해볼 수 있는 시간을 가집니다.
                </Text>
                <CardImage src="/event1.png" borderSide="right" />
              </Card>
            </CardContainer>
            <CardContainer>
              <Text size={18} weight="bolder">
                Hackathon <br />
                2022.03.16 - 03.17
              </Text>
              <Card>
                <Text
                  size={16}
                  color="#000000"
                  style={{ padding: 10, lineHeight: `157%` }}
                >
                  해커톤은 매해 사회현상과 관련되어 새로운 주제로 진행됩니다.
                  해커톤은 첫날 오후 6시부터 다음 날 오전 10시까지 진행되는데,
                  단기간에 새로운 팀원들과 함께 문제를 해결하는 과정에서 많은
                  것을 배우고 성장할 수 있습니다.
                </Text>
                <CardImage src="/event2.png" borderSide="right" />
              </Card>
            </CardContainer>
          </Container>
        </Section>
        <Section
          snapAlign="start"
          backgroundImageSrc="/background2.png"
          style={{
            paddingTop: 80,
            paddingBottom: 40,
          }}
        >
          <Container>
            <Portfolio year={2020} slides={portfolios[2020]} />
            <Portfolio year={2021} slides={portfolios[2021]} />
            <Portfolio year={2022} slides={portfolios[2022]} />
            <Flex
              flexDirection="column"
              alignItems="center"
              style={{ paddingTop: 200 }}
            >
              <img src="/footer.png" width={88} style={{ paddingBottom: 15 }} />
              <Text size={12} color="#0000EC" style={{ paddingBottom: 4 }}>
                tel: 010-2370-9940
              </Text>
              <Text size={12} color="#0000EC">
                e-mail: wit05@naver.com
              </Text>
            </Flex>
          </Container>
        </Section>
      </Main>
    </Layout>
  );
}
