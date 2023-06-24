import { ReactNode } from 'react'
import { Button } from '@mantine/core'

interface ButtonProps {
  children: ReactNode
}

export const CustomButton = ({ children }: ButtonProps) => (
  <Button variant='light' color='blue' mt='md' radius='md' fullWidth>
    {children}
  </Button>
)
