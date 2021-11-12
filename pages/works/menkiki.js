import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Drum Kit">
    <Container>
      <Title>
        Drum Kit <Badge>2020</Badge>
      </Title>
      <P>
        Drum Kit is app for fun i mad it to develope my scaless.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WEb</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JS, JQuary, HTML, Css</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://bakryabdalsalam.github.io/drum-Beko/">
            The fun Deep Learning <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
        </ListItem>
      </List>
      <WorkImage src="/images/works/menkiki_eyecatch.png" alt="menkiki" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/menkiki_01.png" alt="menkiki" />
        <WorkImage src="/images/works/menkiki_02.png" alt="menkiki" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
