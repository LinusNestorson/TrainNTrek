import React from "react"
import "./BMIView.css"
import BMICalculator from "../../components/bmiCalculator/BMICalculator"
import Footer from "../../components/footer/Footer"


const BMIView = () => {

    return (
        <>
            <div className="bmiView">
               <section className="textField">
                    <BMICalculator />
               </section>
               <Footer />
            </div>
        </>
    )
}

export default BMIView