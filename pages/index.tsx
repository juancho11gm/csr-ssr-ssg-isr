import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>CSR - SSR - SSG - ISR</title>
				<meta name='description' content='CSR - SSR - SSG - ISR' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<div className={styles.description}>
					<p>
						Comparison between&nbsp;
						<code className={styles.code}>CSR - SSR - SSG - ISR</code>
					</p>
				</div>

				<div className={styles.grid}>
					<Link href='/csr' className={styles.card} rel='noopener noreferrer'>
						<h2 className={inter.className}>
							CSR <span>-&gt;</span>
						</h2>
						<p className={inter.className}>Client Side Rendering</p>
					</Link>

					<Link href='/ssr' className={styles.card} rel='noopener noreferrer'>
						<h2 className={inter.className}>
							SSR <span>-&gt;</span>
						</h2>
						<p className={inter.className}>Server Side Rendering</p>
					</Link>

					<Link href='/ssg' className={styles.card} rel='noopener noreferrer'>
						<h2 className={inter.className}>
							SSG <span>-&gt;</span>
						</h2>
						<p className={inter.className}>Static Site Generation</p>
					</Link>

					<Link href='/isr' className={styles.card} rel='noopener noreferrer'>
						<h2 className={inter.className}>
							ISR <span>-&gt;</span>
						</h2>
						<p className={inter.className}>Incremental Static Regeneration</p>
					</Link>
				</div>
			</main>
		</>
	);
}
