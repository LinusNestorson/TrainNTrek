import Footer from "../../components/footer/Footer"
import SettingsForm from "../../components/settingsForm/SettingsForm"
import "./SettingsView.css"
const SettingsView  = () => {
   return (
    <>
        <div className="settingsView">
            <section id="settingsContainer">
                <h1 id="settingsH1">SETTINGS</h1>
                <SettingsForm />
            </section>
            <Footer />
        </div>
    </>
   )}

   export default SettingsView