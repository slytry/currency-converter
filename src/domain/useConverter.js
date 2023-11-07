import { useState } from "react"
import { rubToUsd, usdToRub } from "./converter"

export const useConverter = (initialRub, rate) => {

    const initialUsd = rubToUsd(initialRub, rate)

    const [rub, setRub] = useState(initialRub)
    const [usd, setUsd] = useState(initialUsd)

    const createUpdater = (direction) => {
        const { convert, originSetter, targetSetter } = {
            "rub-usd": { convert: rubToUsd, originSetter: setRub, targetSetter: setUsd },
            "usd-rub": { convert: usdToRub, originSetter: setUsd, targetSetter: setRub },
        }[direction];

        return function (value) {
            const origin = value
            const target = convert(origin, rate)

            originSetter(origin)
            targetSetter(target)
        }

    }

    const updateRub = createUpdater('rub-usd')
    const updateUsd = createUpdater('usd-rub')

    return (
        {
            rub, usd, updateUsd, updateRub
        }
    )
}
