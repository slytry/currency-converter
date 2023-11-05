/* eslint-disable react/prop-types */
import { quotes } from "./config"
import {composeRandomQuote  } from "./compose-random-quote"
import styles from "./Quote.module.css"

const defaultQuote = composeRandomQuote(quotes)

export const Quote = ({quote = defaultQuote}) => {
    const { text, author } = quote

    return (
        <div className={styles.root}>
            <blockquote className={styles.blockquote} >
                <p>{text}</p>
            </blockquote>
            <p className={styles.cite} >— {author} <cite>Речь в Стенфорде</cite></p>
        </div>
    )
}
