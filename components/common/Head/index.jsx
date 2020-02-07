import React from 'react';
import NextHead from 'next/head';

const Head = ({ title, description }) => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>{title || ''}</title>
		<meta name="description" content={description || ''} />
		<meta name="viewport" content="width=device-width, inititial-scale=1" />
		<link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
		<link rel="shortcut icon" type="image/x-icon" href="/public/favicon.ico" />
	</NextHead>
);

export default Head;
