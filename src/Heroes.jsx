import React, { useState } from 'react'

export default function Heroes() {

    const [names, setNames] = useState(
        [
            "Шерлок Холмс", 
            "Доктор Ватсон", 
            "Профессор Мориарти",
            "Миссис Хадсон",
            "Ирен Адлер"
          ]
    )

    return (
        <div>
            <ul>
            {
              names.map((item, index) => {
                return(
                    <li key={index}>
                        {item}
                    </li>
                )
              })
            }
            </ul>
        </div>
    )
}
