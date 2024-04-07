import HomeMainWrapper from "@/app/_components/mainWrapper";
import styles from './page.module.css'

export const revalidate = 60;
export default async function Home() {
    const issuesResponse = await fetch(`${process.env.API_URL}/problems`)
    console.log(issuesResponse.status)
    const issues = await issuesResponse.json()
    console.log(issues)

    return (
        <main className={styles.main}>
            <HomeMainWrapper issues={issues}/>
        </main>
    )
}
