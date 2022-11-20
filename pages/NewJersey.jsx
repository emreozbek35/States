import React from 'react'
import Entry from '../components/Entry'
import Hero from '../components/Hero'
import Image2 from '../src/images/nj.jpeg'


const NewJersey = () => {
    const obj = {
        state: "New Jersey'de",
        image: Image2,
        pros: [
            "-Her şeye yakın",
            "-Çoklu yaşam tarzı seçenekleri (Kentsel, kasaba, kırsal, kıyı)",
            "-İyi bir devlet okulu sistemi",
            "-Gelişmiş sağlık sistemi",
            "-Güvenli",
            "-4 mevsim de yaşanmakta"



        ],
        cons: [
            "-Yüksek yaşam maliyeti",
            "-Ağır gelir vergisi yükü",
            "-Yüksek emlak vergileri",
            "-Trafik sıkışıklığı",
            "-Yazları çok sıcak ve nemli, kışları ise çok soğuk ve karlı",
            "-Ülkenin en yoğun nüfuslu eyaleti"

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

export default NewJersey