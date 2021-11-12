import {
  Container,
  Badge,
  List,
  ListItem,

} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="BirthDay">
    <Container>
      <Title>
        BirthDay <Badge>2021</Badge>
      </Title>
      <P>
        i make this page to Celebrate my fiancee birthDay.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>PLATFORM</Meta>
          <span>WEb</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JS </span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/pichu2_eyecatch.png" alt="BirthDay" />
    </Container>
  </Layout>
)

export default Work
