import { useConverter } from '../../domain';
import styles from './converter.module.css';

export const Converter = () => {
    const { rub, usd, updateRub, updateUsd } = useConverter(100, 98)

    return (
        <form className={styles.root}>
            <label>
                <span>Сумма в рублях</span>
                <input type="number" name="rub" min={0} step={1} value={rub} onChange={(e) => { updateRub(e.target.value) }} />
            </label>
            <label>
                <span>Сумма в долларах</span>
                <input type="number" name="usd" min={0} step={1} value={usd} onChange={(e) => { updateUsd(e.target.value) }} />
            </label>
        </form>
    )
}
