import {
  Card,
  CardContainer,
  CardImage,
  CardImageContainer,
  Main,
  Section,
} from '@/styles';
import Layout from '@/components/layout';
import Flex from '@/components/flex';
import Text from '@/components/text';

import { BsChevronDown } from '@react-icons/all-files/bs/BsChevronDown';
import Portfolio from '@/components/portfolio';
import Logo from '@/icons/Logo';

export default function Home() {
  return (
    <Layout>
      <Main>
        <Section backgroundColor="#0000B1" style={{ height: `100vh` }}>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            style={{
              height: `100%`,
              backgroundImage: `url('/background1.png')`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
            }}
          >
            <Flex
              gap={10}
              alignItems="center"
              style={{
                width: `100%`,
                paddingLeft: 16,
                paddingTop: 20,
              }}
            >
              <a href="/apply" style={{ textDecoration: `none` }}>
                <Text size={22}>apply</Text>
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
        </Section>
        <Section
          backgroundImageSrc="/section1.png"
          style={{
            height: `100vh`,
          }}
        >
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            style={{
              background: `linear-gradient(180deg, #00081C 0%, rgba(0, 8, 28, 0) 100%)`,
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
                style={{ paddingBottom: 32, lineHeight: `124%` }}
              >
                Create products
                <br />
                that society needs
              </Text>
              <Text size={18} weight="lighter" style={{ lineHeight: `169%` }}>
                여기는 위트 설명 들어갈 자리, 파도치듯 네게 맞춰 네게 휩쓸리듯
                빠져들어 낮과 밤이 뒤바껴가 널만나 내 중심이 무너져가 너의눈을
                볼때면 온세상이 뒤집혀 암인 트러블 어지러워 머릿속이 뒤엉켜
                견디게 해줘 아프다 해도
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
        </Section>
        <Section
          backgroundColor="#000000"
          style={{ paddingBottom: 60 }}
          snapAlign="start"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            style={{ width: `100%`, paddingTop: 60, paddingBottom: 75 }}
          >
            <Text size={32}>셀별 소개</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="flex-end"
            gap={4}
            style={{ padding: 12 }}
          >
            <Text size={12} weight="lighter">
              DESIGN CELL
            </Text>
            <Text size={16} style={{ textAlign: `right`, lineHeight: `169%` }}>
              디자인셀 설명 빛나는 나를 향해 짙은 안개 속에 <br />
              높은 파도 위에 흐릿하게 비친 깊은 침묵 <br />
              속에 슬픈 선율 위에 희미하게 들린
            </Text>
          </Flex>
          <div style={{ paddingLeft: 12, paddingRight: 12 }}>
            <img src="/cell.png" style={{ width: `100%` }} />
          </div>
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            gap={4}
            style={{ padding: 12 }}
          >
            <Text size={12} weight="lighter">
              DEVELOP CELL
            </Text>
            <Text size={16} style={{ textAlign: `left`, lineHeight: `169%` }}>
              디자인셀 설명 빛나는 나를 향해 짙은 안개 속에 <br />
              높은 파도 위에 흐릿하게 비친 깊은 침묵 <br />
              속에 슬픈 선율 위에 희미하게 들린
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            style={{ width: `100%`, paddingTop: 60, paddingBottom: 75 }}
          >
            <Text size={32}>활동 소개</Text>
          </Flex>
          <CardContainer>
            <Card style={{ marginBottom: 38 }}>
              <div style={{ position: `relative` }}>
                <CardImageContainer>
                  <CardImage src="/background1.png" borderSide="left" />
                </CardImageContainer>
                <Flex
                  flexDirection="column"
                  alignItems="flex-end"
                  style={{
                    padding: 6,
                    position: `absolute`,
                    top: 0,
                    right: 0,
                  }}
                >
                  <Text size={18} weight="bolder">
                    WDD 03.16
                  </Text>
                  <Text
                    size={12}
                    weight="lighter"
                    style={{ textAlign: `right`, lineHeight: `169%` }}
                  >
                    place_서울 광진구 건국대학교 <br />
                    time_18:00 ~ 10:00
                  </Text>
                </Flex>
              </div>
              <Text
                size={12}
                color="#000000"
                style={{ padding: 10, lineHeight: `157%` }}
              >
                중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리
                또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지
                아니하는 범위안에서 내부규율에 관한 규칙을 제정할
                수중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리
                또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되무에
                관한 규칙을 제정할 수 있으며, 법률에 저촉되무에 관한 규칙을
                제정할 수 있
              </Text>
            </Card>
            <Card>
              <Text
                size={12}
                color="#000000"
                style={{ padding: 10, lineHeight: `157%` }}
              >
                중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리
                또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지
                아니하는 범위안에서 내부규율에 관한 규칙을 제정할
                수중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리
                또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되무에
                관한 규칙을 제정할 수 있으며, 법률에 저촉되무에 관한 규칙을
                제정할 수 있
              </Text>
              <div style={{ position: `relative` }}>
                <CardImageContainer>
                  <CardImage src="/background1.png" borderSide="right" />
                </CardImageContainer>
                <Flex
                  flexDirection="column"
                  alignItems="flex-start"
                  style={{
                    padding: 6,
                    position: `absolute`,
                    top: 0,
                    left: 0,
                  }}
                >
                  <Text size={18} weight="bolder">
                    WDD 03.16
                  </Text>
                  <Text
                    size={12}
                    weight="lighter"
                    style={{ textAlign: `left`, lineHeight: `169%` }}
                  >
                    place_서울 광진구 건국대학교 <br />
                    time_18:00 ~ 10:00
                  </Text>
                </Flex>
              </div>
            </Card>
          </CardContainer>
        </Section>
        <Section
          snapAlign="start"
          backgroundImageSrc="/background2.png"
          style={{
            paddingTop: 80,
            paddingBottom: 40,
          }}
        >
          <Portfolio year={2020} slides={[]} />
          <Portfolio year={2021} slides={[]} />
          <Portfolio year={2022} slides={[]} />
          <Flex
            flexDirection="column"
            alignItems="center"
            style={{ paddingTop: 200 }}
          >
            <img src="/footer.png" width={88} style={{ paddingBottom: 15 }} />
            <Text size={12} color="#0000EC" style={{ paddingBottom: 4 }}>
              tel: 010-1111-2222
            </Text>
            <Text size={12} color="#0000EC">
              e-mail: wit05@naver.com
            </Text>
          </Flex>
        </Section>
      </Main>
    </Layout>
  );
}
