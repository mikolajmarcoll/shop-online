import { TextInput, Text } from '@mantine/core'

interface InputProps {
  value: string
  setValue: (e: any) => void
  debounced: string
}

export const Input = ({ value, setValue, debounced }: InputProps) => (
  <>
    <TextInput
      label='Enter value to see debounce'
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />

    <Text>Value: {value}</Text>
    <Text>Debounced value: {debounced}</Text>
  </>
)
