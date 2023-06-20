"use client"

import Header from "@/components/header"
import { Button, ThemeProvider, createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: { 
      main: "#00ADB5",
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between bg-tertiary">
        <ThemeProvider theme={theme}>
          <Header />
          <Button variant="contained" href="/home">
            Hello World
          </Button>
          Esta é a página inicial!
        </ThemeProvider>
      </main>
  )
}