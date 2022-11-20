import React from 'react'
import Entry from '../components/Entry'
import Hero from '../components/Hero'


const NorthCarolina = () => {
    const obj = {
        state: "North Carolina'da",
        image: "../src/images/nc.jpeg",
        pros: [

            "-Düşük yaşam maliyeti ve ekonomik fırsatlar",
            "-Ilıman hava ve ılıman kışlar",
            "-Outdoor aktivite bolluğu",
            "-Kaliteli sağlık sistemine sahip",
            "-Düşük kurumsal vergi oranı"


        ],
        cons: [
            "-Yüksek vergi yükü",
            "-Yüksek suç oranları",
            "-Kasırga tehdidi",
            "-4 mevsim yaşanmamakta",
            "-Yazları çok sıcak"

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

export default NorthCarolina