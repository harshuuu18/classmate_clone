import Layout from "../layouts";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/NavBar/NavBar.scss";
import "../components/CustomizeNotebook/CustomizeNotbook.scss"
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<Layout>
				<Head>
					<link
						rel='stylesheet'
						href='https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
					/>
				</Head>
				<Component {...pageProps} />
				<Toaster />
			</Layout>
		</RecoilRoot>
	);
}

export default MyApp;
