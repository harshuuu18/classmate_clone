import React from "react";

import NavBar from "../components/NavBar/NavBar";

function Layout({ children }) {
	return (
		<div>
			{/* <NavBar /> */}
			<NavBar />
			{children}
		</div>
	);
}

export default Layout;
