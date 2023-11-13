import styles from '../Notes.module.css';

export default async function NotePage({ params }: any) {
    const note = await getNote(params.id);

    return (
        <div>
            <h1>notes/{params.id}</h1>
            <div className={styles.note}>
                <h2>{note.title}</h2>
                <h5>{note.content}</h5>
                <p className="created">{note.created}</p>
            </div>
        </div>
    )
}

async function getNote(noteId: string) {
    const response = await fetch(
        `http://127.0.0.1:8090/api/collections/postits/records/${noteId}`,
        {
            next: { revalidate: 10 },
        },
    )
    const data = await response.json();
    return data;
}
