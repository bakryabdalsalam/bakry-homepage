import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.png'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.png'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.png'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="sourceCode">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My Source Code
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="BirthDay"
            thumbnail={thumbFishWorkflow}
            href="https://github.com/bakryabdalsalam/aya-birthday.git"
          />
          <GridItem
            title="Simon Game"
            thumbnail={thumbMyDeskSetup}
            href="https://github.com/bakryabdalsalam/simon-game.git"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Drum Kit"
            thumbnail={thumb500PaidUsers}
            href="https://github.com/bakryabdalsalam/drum-Beko.git"
          />
          <GridItem
            title="TinDog"
            thumbnail={thumbFinancialGoal}
            href="https://github.com/bakryabdalsalam/TinDog.git"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
