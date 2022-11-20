import React from 'react'
import Entry from '../components/Entry'
import Hero from '../components/Hero'


const Virginia = () => {
    const obj = {
        state: "Virginia'da",
        image: "../src/images/images.jpeg",
        pros: ["-Samimi ve güvenli ortam",
            "-Düşük suç ve şiddet oranı",
            "-'Güneyli misafirperverliği'",
            "-Gelişmekte ve büyümekte olan ekonomisi",
            "-Üstün eğitim seviyesi",
            "-Yüksek seviye sağlık sistemine sahip",
            "-Güzel dağlara ve plajlara ev sahipliği yapmakta",
            "-4 mevsimin yaşandığı bir eyalet"

        ],
        cons: [
            "-Yüksek yaşam maliyeti",
            "-Aşırı vergi yükü",
            "-27 adet askeri üsse sahip",
            "-Askeri jetlerden ötürü oluşan ses kirliliği",
            "-Trafik sıkışıklığı",
            "-Toplu taşıma eksikliği",

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

export default Virginia