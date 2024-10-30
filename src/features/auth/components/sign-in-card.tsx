
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod";

import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'

import {Card, CardHeader, CardContent, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {DottedSeparator} from "@/components/dotted-separator";
import Link from "next/link";
import {loginSchema} from "@/features/auth/schema";
import {useLogin} from "@/features/auth/api/use-login";


export const SignInCard = () => {

  const {mutate} = useLogin()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {email: '', password: ''},
  })

  const onFormSubmit = (values: z.infer<typeof loginSchema>) => {
    mutate(values)
  }

  return (
    <Card className='w-full h-full md:w-[487px] border-none shadow-none' >
      <CardHeader className='flex items-center justify-center text-center p-7'>
        <CardTitle className='text-2xl'>Welcome back!</CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-4">
            <FormField
              name='email'
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type='email'
                      placeholder='Enter email address'
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              name='password'
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type='password'
                      placeholder='Enter password'
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />

            <Button disabled={false} size='lg' className='w-full' >
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className='px-7' >
        <DottedSeparator/>
      </div>
      <CardContent className='p-7 flex flex-col gap-y-4' >
        <Button
          disabled={false}
          variant='secondary'
          size='lg'
          className='w-full'
        >
          <FcGoogle className='mr-2 size-5' />
          Login With Google
        </Button>
        <Button
          disabled={false}
          variant='secondary'
          size='lg'
          className='w-full'
        >
          <FaGithub className='mr-2 size-5' />
          Login With GitHub
        </Button>
      </CardContent>
      <div className="px-7">
        <DottedSeparator/>
      </div>
      <CardContent className="p-7 flex items-center justify-center">
        <p>
          Don&apos;t have an account?
          <Link href='/sign-up' >
            <span className="text-blue-700"> Sign up</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
