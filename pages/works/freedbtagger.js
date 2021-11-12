import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="NewsLeter">
    <Container>
      <Title>
        NewsLeter <Badge>2020</Badge>
      </Title>
      <P>Automatic Send news for the sbscriber</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Js, mangoDB</span>
        </ListItem>
        <ListItem>
          <Meta>Visit</Meta>
          <Link href="https://powerful-reaches-42440.herokuapp.com/">
            NewsLeter
          </Link>
        </ListItem>
      </List>

      

      <WorkImage src="/images/works/freedbtagger_01.png" alt="NewsLeter" />
    </Container>
  </Layout>
)

export default Work
