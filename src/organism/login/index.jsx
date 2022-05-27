import React, { useState } from "react";
import "./style.css";

const Login = () => {
	const [name, setname] = useState("");
	const [password, setpassword] = useState("");
	const [remember, setremember] = useState(false);
	return (
		<div className='loginInterface flexStart'>
			<img
				src='https://media.discordapp.net/attachments/902991650727538769/979530709033173022/Screenshot_2022-05-26_175810.jpg?width=862&height=581'
				alt=''
				className='leftSection'
			/>
			<div className='rightSection flexCol'>
				<p className='welcomLabel'>Welcome to Delisas! 👋</p>
				<span>Please sign in to your account</span>
				<div className='flexColStart'>
					<label className='labelAdd'>User name</label>
					<input
						className='inputAdd'
						type='text'
						onChange={(e) => setname(e.target.value)}
					/>
				</div>
				<div className='flexColStart'>
					<div className='passwordLabel'>
						<label className='labelAdd'>Password</label>
						<label className='labelAdd colored'>
							Forgot password?
						</label>
					</div>
					<input
						className='inputAdd'
						type='password'
						onChange={(e) => setpassword(e.target.value)}
					/>
				</div>
				<div className='flex'>
					<input
						className='rememberMeBox'
						type='checkbox'
						onChange={(e) => setremember(e.target.value)}
					/>
					<label className='labelAdd'>Remember Me</label>
				</div>
				<button type='submit' className='signInBtn'>
					Sign in
				</button>
				<p>
					New on our platform?{" "}
					<span className='colored'>Creat an account</span>
				</p>
				<div className='line flex'>
					<span></span>
					or
					<span></span>
				</div>
				<div className='socialMediaIcons flex'></div>
			</div>
		</div>
	);
};

export default Login;
