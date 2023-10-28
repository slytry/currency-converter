import { quotes } from "./config"
import styles from "./quote.module.css"

export const Quote = () => {
    const { text, author } = quotes[0]

    return (
        <div className={styles.quote}>
            <blockquote >
                <p>{text}</p>
            </blockquote>
            <p>— {author} <cite>Речь в Стенфорде</cite></p>
        </div>
    )
}
