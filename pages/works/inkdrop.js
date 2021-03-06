import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="TinDog">
    <Container>
      <Title>
        TinDog <Badge>2020-</Badge>
      </Title>
      <P>
        this a web sit for sale a dog and this web site i made to develope my scales in web develope.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.bakryabdalsalam.github.io/TinDog/">
            https://www.bakryabdalsalam.github.io/TinDog/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, Bootstrap, css</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/inkdrop_01.png" alt="TinDog" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="TinDog" />
    </Container>
  </Layout>
)

export default Work
