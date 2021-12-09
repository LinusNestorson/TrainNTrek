import "./SettingsForm.css"

const SettingsForm = () => {

    return (
        <>
            <form id="settingsForm">
                <div class="field">
                    <label className="label" for="name">Name </label>
                    <br />
                    <input className="inputBox" type="text" id="name" name="name" placeholder="Enter your fullname" />
                </div>
                <div class="genderField">
                    <label className="label">Gender</label>
                    <br />
                    <label className="gender">Female</label> <input className="genderInput" type="checkbox" name="gender" value="Female" />
                    <label className="gender"> Male</label><input className="genderInput" type="checkbox" name="gender" value="Male" />
                    <label className="gender">Non-binary</label><input type="checkbox" name="gender" value="NonBinary" />
                </div>
                <div class="field">
                    <label className="label" for="age">Age<br /></label>
                    <input className="inputBox" type="numbers" id="age" name="age" placeholder="YYYY " />
                    <p>Y/O</p>
                </div>
                <div class="field">
                    <label className="label" for="weight">Weight<br /></label>
                    <input className="inputBox" type="numbers" id="weight" name="wight" />
                    <p>KG</p>
                </div>
                <div class="field">
                    <label className="label" for="length">Length<br /></label>
                    <input className="inputBox" type="numbers" id="length" name="length" />
                    <p>CM</p>
                </div>
                <div id="submitBox">
                    <button className="submitButton" type="submit">Save</button>
                </div>
            </form>
        </>
    )
}

export default SettingsForm
