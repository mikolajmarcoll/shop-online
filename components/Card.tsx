import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'
import { CustomButton } from './Button'

interface CardProps {
  title: string
  description: string
  image: {
    url: string
    alt: string
  }
}

export const CustomCard = ({ title, description, image }: CardProps) => (
  <Card shadow='sm' padding='lg' radius='md' withBorder>
    <Card.Section>
      <Image src={image.url} alt={image.alt} height={160} />
    </Card.Section>
    <Group position='apart' mt='md' mb='xs'>
      <Text weight={500}>{title}</Text>
      <Badge color='pink' variant='light'>
        On Sale
      </Badge>
    </Group>
    <Text size='sm' color='dimmed'>
      {description}
    </Text>
    <CustomButton>Book classic tour now</CustomButton>
  </Card>
)
