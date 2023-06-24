'use client'

import { Button, Group } from '@mantine/core'
import { useDisclosure, useDebouncedValue } from '@mantine/hooks'
import { useState } from 'react'

import { Layout } from '../../components/Layout'
import { ProductDetails } from '../../components/Product'
import { CustomModal } from '../../components/Modal'
import { CustomCard } from '../../components/Card'
import { Input } from '../../components/Input'

const DATA = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: {
    url: 'https://picsum.photos/id/1060/536/354',
    alt: 'Barista',
  },
  rating: 4.5,
  title: 'Barista',
}

const AboutPage = () => {
  // modal utils
  const [opened, { open, close, toggle }] = useDisclosure(false, {
    onOpen: () => {
      console.log('Opened')
    },
    onClose: () => {
      console.log('Closed')
    },
  })
  //

  // input utils
  const [value, setValue] = useState('')
  const [debounced] = useDebouncedValue(value, 200)
  //

  return (
    <Layout>
      <h1 className='text-5xl font-bold text-center text-red-500 mt-6 border-8 border-green-700 antialiased shadow-pink-400'>
        Hello! :wave
      </h1>
      <Input value={value} setValue={setValue} debounced={debounced} />
      <CustomModal opened={opened} onClose={close} title='Authentication'>
        Modal content
      </CustomModal>
      <Group position='center'>
        <Button onClick={open}>Open modal</Button>
      </Group>
      <ProductDetails data={DATA} />
      <CustomCard
        title='Norway Fjord Adventures'
        description='With Fjord Tours you can explore more of the magical fjord landscapes with
      tours and activities on and around the fjords of Norway'
        image={{
          url: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
          alt: 'Norway',
        }}
      />
    </Layout>
  )
}

export default AboutPage
