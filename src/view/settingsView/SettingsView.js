import Footer from '../../components/footer/Footer'
import SettingsForm from '../../components/settingsForm/SettingsForm'
import './SettingsView.css'

// The view for the settings page.

const SettingsView = () => {
  return (
    <>
      <div className='settingsView'>
        <section id='settingsContainer'>
          <h1 id='settingsH1'>SETTINGS</h1>
          <SettingsForm />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default SettingsView
