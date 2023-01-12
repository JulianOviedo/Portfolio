import styles from './Textarea.module.css'

export default function Textarea({type, label, name}) {
    return (
        <label className={styles.label}>
            <p>{label}</p>
            <textarea className={styles.textarea} type={type} label={label} name={name} ></textarea>
        </label>
    )
}
