"use client"
import Nav from '@/components/Nav'
import '@/styles/globals.css'
import {NextUIProvider} from '@nextui-org/react'
import { AuthContextProvider } from '@/context/AuthContext'

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <AuthContextProvider>
        <Nav />
        <Component {...pageProps} />
      </AuthContextProvider>
    </NextUIProvider>)
}
