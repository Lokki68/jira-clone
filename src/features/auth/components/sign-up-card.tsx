'use client'

import {z} from 'zod'

import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'

import {Card, CardHeader, CardContent, CardTitle, CardDescription} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {DottedSeparator} from "@/components/dotted-separator";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {registerSchema} from "@/features/auth/schema";
import {useRegister} from "@/features/auth/api/use-register";



export const SignUpCard = () => {

  const {mutate, isPending} = useRegister()

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {email: '', password: ''},
  })

  const onFormSubmit = (values: z.infer<typeof registerSchema>) => {
    mutate(values)
  }

  return (
    <Card className='w-full h-full md:w-[487px] border-none shadow-none'>
      <CardHeader className='flex items-center justify-center text-center p-7'>
        <CardTitle className='text-2xl'>Sign Up</CardTitle>
        <CardDescription>
          By Signing up, you agree to our
          <Link href='/privacy'>
            <span className="text-blue-700"> Privacy Policy</span>
          </Link>
          <span> and</span>
          <Link href='/terms'>
            <span className="text-blue-700"> Terms of Service</span>
          </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator/>
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-4">
            <FormField
              name='name'
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type='text'
                      placeholder='Enter your name'
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />

            <FormField
              name='email'
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
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
                      disabled={isPending}
                      type='password'
                      placeholder='Enter password'
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />

            <Button disabled={isPending} size='lg' className='w-full'>
              Register
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className='px-7'>
        <DottedSeparator/>
      </div>
      <CardContent className='p-7 flex flex-col gap-y-4'>
        <Button
          disabled={false}
          variant='secondary'
          size='lg'
          className='w-full'
        >
          <FcGoogle className='mr-2 size-5'/>
          Sign Up With Google
        </Button>
        <Button
          disabled={false}
          variant='secondary'
          size='lg'
          className='w-full'
        >
          <FaGithub className='mr-2 size-5'/>
          Sign Up With GitHub
        </Button>
      </CardContent>
      <div className="px-7">
        <DottedSeparator/>
      </div>
      <CardContent className="p-7 flex items-center justify-center">
        <p>
          Already have an account?
          <Link href='/sign-in'>
            <span className="text-blue-700"> Sign In</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
