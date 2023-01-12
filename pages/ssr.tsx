import Head from 'next/head';
import Link from 'next/link';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import DateTime from '../components/DateTime';
import { TimezoneI } from '../interfaces';

const inter = Inter({ subsets: ['latin'] });

export default function SSR({ datetime }: TimezoneI) {
	return (
		<>
			<Head>
				<title>Server Side Rendering</title>
				<meta name='description' content='Example with Server Side Rendering' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<h2 className={inter.className}>Server Side Rendering</h2>
				<DateTime datetime={new Date(datetime)} />
				<Link href='/' className={styles.card} rel='noopener noreferrer'>
					<p className={inter.className}>
						Go back <span>-&gt;</span>
					</p>
				</Link>
			</main>
		</>
	);
}

export async function getServerSideProps() {
	try {
		const response = await fetch(
			'https://worldtimeapi.org/api/timezone/America/Bogota'
		);
		const timezone: TimezoneI = await response.json();
		return {
			props: {
				datetime: timezone.datetime,
			},
		};
	} catch (error) {
		console.error(error);
		return {
			props: {},
		};
	}
}
