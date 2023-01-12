import Head from 'next/head';
import Link from 'next/link';
import { Inter } from '@next/font/google';
import { useEffect, useState } from 'react';
import { TimezoneI } from '../interfaces';
import styles from '../styles/Home.module.css';
import DateTime from '../components/DateTime';

const inter = Inter({ subsets: ['latin'] });

export default function CSR() {
	const [datetime, setDatetime] = useState<Date | null>(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(
					'https://worldtimeapi.org/api/timezone/America/Bogota'
				);
				const timezone: TimezoneI = await response.json();
				setDatetime(new Date(timezone.datetime));
				setLoading(false);
			} catch (error) {
				setLoading(false);
			}
		};

		fetchData();
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
				{isLoading ? (
					<p>Loading...</p>
				) : !datetime ? (
					<p>No time.</p>
				) : (
					<DateTime datetime={datetime} />
				)}
				<Link href='/' className={styles.card} rel='noopener noreferrer'>
					<p className={inter.className}>
						Go back <span>-&gt;</span>
					</p>
				</Link>
			</main>
		</>
	);
}
