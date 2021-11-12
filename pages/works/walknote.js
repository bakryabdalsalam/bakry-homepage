import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Beko Chat App">
    <Container>
      <Title>
        Beko Chat App <Badge>2020-2021</Badge>
      </Title>
      <P>
        Beko chat app is a vedio call for meeting i made it with help agora
      </P>
      <P>
        This service is avilabol now. Thank you for over 10,000 registered
        users!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>web</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://bekochatapp.netlify.app/create">
            https://bekochatapp.netlify.app/create
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>react-native, Agora, MongoDB</span>
        </ListItem>
      </List>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/walknote_01.png" alt="bekochatapp" />
        <WorkImage src="/images/works/walknote_02.png" alt="bekochatapp" />
      </SimpleGrid>
      <WorkImage src="/images/works/walknote_03.png" alt="bekochatapp" />
      <WorkImage src="/images/works/walknote_04.png" alt="bekochatapp" />
    </Container>
  </Layout>
)

export default Work
