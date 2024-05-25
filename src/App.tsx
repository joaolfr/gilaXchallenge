import { Container } from "components/container"
import "./global.css"
import { ThemeProvider } from "@/context/ThemeContext";

export function App() {

  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  )
}