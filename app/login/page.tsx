import Image from 'next/image'
import React from 'react'
import BG from '../../public/img/bg.jpg'
import { poppins } from '../_lib/fonts'
import { SignInButton } from '@clerk/nextjs'
import { Button } from '../_components/ui/button'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const LoginPage = async () => {
    const { userId } = await auth()

    if (userId) {
        redirect('/');
    }

    return (
        <div className="flex relative h-screen items-center justify-center p-24">
            <Image
                src={BG}
                layout="fill"
                objectFit="cover"
                alt="Background"
                quality={100}
                className='absolute inset-0 h-screen w-full opacity-70'
            />
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <p className={`${poppins.className} text-teal-100 cursor-pointer font-bold text-6xl absolute top-4 left-4`}>
                St3 ManageMe
            </p>
            <div className="relative z-10 w-[600px] text-teal-100 text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Elevate your employee manage experience
                </h1>
                <p className="text-lg mb-6">
                    Register, manage and track your staff. Welcome to the future of employee management.
                </p>
                <SignInButton>
                    <Button variant='outline'>Login ou criar conta</Button>
                </SignInButton>
            </div>
        </div>
    )
}

export default LoginPage