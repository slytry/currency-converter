import { quotes } from "./config"
import styles from "./Quote.module.css"

export const Quote = () => {
    const { text, author } = quotes[0]

    return (
        <div className={styles.root}>
            <blockquote className={styles.blockquote} >
                <p>{text}</p>
            </blockquote>
            <p className={styles.cite} >— {author} <cite>Речь в Стенфорде</cite></p>
        </div>
    )
}
