import { Button, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input';

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Informe um email válido'),
  password: yup.string().required('Senha obrigatório'),
})

export default function SignIn() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  const {errors} = formState;

  const handleSignin: SubmitHandler<SignInFormData> = (values) => {
    console.log(values);
  }

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center" onSubmit={handleSubmit(handleSignin)}>
      <Flex as="form" width="100%" maxW={360} bg="gray.800" padding={8} borderRadius={8} flexDir="column" noValidate>
        <Stack spacing="4">
          <Input name="email" label="E-mail" type="email" {...register('email') } error={errors.email} />
          <Input name="password" label="Senha" type="password" {...register('password') } error={errors.password} />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}> Entrar </Button>
      </Flex>
    </Flex>
  )
}
