import Link from "next/link";
import React, { useState } from "react";

function NavBar() {
	const [click, setClick] = React.useState(false);

	const handleClick = () => setClick(!click);
	const Close = () => setClick(false);

	return (
		<div>
			<div className={click ? "main-container" : ""} onClick={() => Close()} />
			<nav className='navbar' onClick={(e) => e.stopPropagation()}>
				<div className='nav-container'>
					<div className='nav-logo'>
						<img
							src='/logo.png'
							width={"150px"}
						/>
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className='nav-item'>
							<Link href={"/"}>
								<a
									activeclassname='active'
									className='nav-links'
									onClick={click ? handleClick : null}>
									Home
								</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href={"/customize-notebook"}>
								<a
									activeclassname='active'
									className='nav-links'
									onClick={click ? handleClick : null}>
									Customize Notebook
								</a>
							</Link>
						</li>
						<li className='nav-item'>
							<a
								exact
								to='/blog'
								activeclassname='active'
								className='nav-links'
								onClick={click ? handleClick : null}>
								Blog
							</a>
						</li>
						<li className='nav-item'>
							<a
								exact
								to='/contact'
								activeclassname='active'
								className='nav-links'
								onClick={click ? handleClick : null}>
								Contact Us
							</a>
						</li>
						<i className={"fa fa-heart"}></i>
						<div className='devider'></div>
						<i className={"fa fa-shopping-cart"}></i>
					</ul>
					<div className='nav-icon' onClick={handleClick}>
						<i className={click ? "fa fa-times" : "fa fa-bars"}></i>
						<div className='devider'></div>
						<i className={"fa fa-heart"}></i>
						<div className='devider'></div>
						<i className={"fa fa-shopping-cart"}></i>
					</div>
					<div className='NavBarIcons'></div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
