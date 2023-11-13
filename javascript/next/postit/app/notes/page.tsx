import Link from "next/link";
import PocketBase from "pocketbase";
import CreateNote from "./CreateNote";
import styles from './Notes.module.css';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

export default async function NotesPage() {
    const notes = await getNotes();

    return (
        <div className="container">
            <h1>Notes</h1>
            <div className={styles.grid}>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note}></Note>;
                })}
            </div>

            <CreateNote />
        </div>
    )
}

async function getNotes() {
    const db = new PocketBase('http://127.0.0.1:8090');
    const data = await db.collection('postits').getList(1, 30);
    return data?.items as any[];
}

function Note({ note }: any) {
    const { id, title, content, created } = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <div className={styles.note}>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p className="created">{created}</p>
            </div>
        </Link>
    )
}