import Head from 'next/head';
import Link from 'next/link';
import { Inter } from '@next/font/google';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

interface TimezoneI {
	datetime: string;
}

export default function CSR() {
	const [datetime, setDatetime] = useState<string | null>(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch('http://worldtimeapi.org/api/timezone/America/Bogota')
			.then((res) => res.json())
			.then((timezone: TimezoneI) => {
				setTimeout(() => {
					setDatetime(timezone.datetime);
					setLoading(false);
				}, 1000);
			});
	}, []);

	return (
		<>
			<Head>
				<title>Client Side Rendering</title>
				<meta name='description' content='Example with Client Side Rendering' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<h2 className={inter.className}>Client Side Rendering</h2>
				{isLoading ? <p>Loading...</p> : !datetime ? <p>No time</p> : datetime}
				<Link href='/' className={styles.card} rel='noopener noreferrer'>
					<p className={inter.className}>
						Go back <span>-&gt;</span>
					</p>
				</Link>
			</main>
		</>
	);
}
