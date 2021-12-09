import Footer from "../../components/footer/Footer"
import SettingsForm from "../../components/settingsForm/SettingsForm"
import "./SettingsView.css"
const SettingsView  = () => {
   return (
       <>
            <div className="settingsView">
                <div className="settingsContainer">
                    <h1>SETTINGS</h1>
                    <SettingsForm />
                </div>
            </div>
            <Footer />
       </>
   )}

   export default SettingsView