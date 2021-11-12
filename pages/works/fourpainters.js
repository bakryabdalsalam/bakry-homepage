import {

  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Simon Game">
    <Container>
      <Title>
        Simon Game <Badge>2020</Badge>
      </Title>
      <P>
        Simon Game is a game for web i make it to fun and develope my scales.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>js, Jquary, HTML, CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://bakryabdalsalam.github.io/simon-game/">
            The fun Deep Learning <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Simon</Center>
      </Heading>
      <WorkImage
      />
      <WorkImage src="/images/works/the-four-painters_01.png" alt="Simon" />
      
    </Container>
  </Layout>
)

export default Work
