import React from 'react'

const Hero = (props) => {
    const pros = props.pros
    const cons = props.cons

    const listItems1 = pros.map((pro, index) => {
        return <li key={index}>{pro}</li>
    })

    const listItems2 = cons.map((con, index) => {
        return <li key={index}>{con}</li>
    })
    return (
        <section className='hero'>
            <div>
                <img src={props.image} />
            </div>


            <div className='info-container'>
                <h1>{props.state} Yaşam</h1>

                <div className="info">
                    <ul>
                        {listItems1}
                    </ul>

                    <ul>
                        {listItems2}
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Hero