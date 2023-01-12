import Head from 'next/head';
import Link from 'next/link';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import DateTime from '../components/DateTime';
import { TimezoneI } from '../interfaces';

const inter = Inter({ subsets: ['latin'] });

export default function ISR({ datetime }: TimezoneI) {
	return (
		<>
			<Head>
				<title>Static Site Generation</title>
				<meta
					name='description'
					content='Example with Static Site Generation'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<h2 className={inter.className}>Static Site Generation</h2>
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

export async function getStaticProps() {
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
		return {
			props: {},
		};
	}
}
