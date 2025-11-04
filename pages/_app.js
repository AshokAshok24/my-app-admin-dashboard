import HomeContainer from "@/components/HomeContainer";


import "@/styles/globals.css";
import "@/styles/header.css";
import "@/styles/sideBar.css";
import "@/styles/mainContent.css";

export default function App({ Component, pageProps }) {
  return (
    <>

      <HomeContainer>

        <Component {...pageProps} />

      </HomeContainer>
    </>
  )
}

