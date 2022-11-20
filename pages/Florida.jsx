import React from 'react'
import { useState } from 'react'
import Entry from '../components/Entry'
import Hero from '../components/Hero'

const Florida = (props) => {
    const obj = {
        state: "Florida'da",
        image: "../src/images/original_shutterstock_715260826.avif",
        pros: ["-Yıl boyunca güzel hava (+200 gün güneşli)",
            "-State income tax yok",
            "-Eğitimi iyi",
            "-Konumundan dolayı Avrupa'ya daha sık uçuşlar",
            "-Çok fazla kültürel çeşitliliğe sahip",
            "-Muhteşem sahiller",

        ],
        cons: [
            "-Trafik sıkışıklığına sahip",
            "-Yazları aşırı sıcak ve nemli",
            "-Haziran'dan Eylül'e kadar şiddetli yağmur",
            "-Yıldırımlar",
            "-Sel sigortası (Yaşadığın yere göre yıllık 190$ - 2000$)"
        ]
    }
    return (
        <div>

            <main>

                <Entry {...obj}></Entry>

                <Hero
                    {...obj}
                ></Hero>

            </main>

        </div>
    )
}

export default Florida