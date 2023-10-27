import Header from "./header/page";
import { ThemeProvider } from "./ThemeContext";

export default function Home() {
  return (
    <main className="">
      <Header />
    </main>

    // <ThemeProvider>
    //   <Header />
    // </ThemeProvider>
  );
}
