(function(core) {
    class User {
        constructor(displayName, emailAddress, username, password) {
            this.DisplayName = displayName;
            this.EmailAddress = emailAddress;
            this.Username = username;
            this.Password = password;
        }

        set DisplayName(displayName) {
            this.m_displayName = displayName;
        }

        get DisplayName() {
            return this.m_displayName;
        }

        set Username(username) {
            this.m_username = username;
        }

        get Username() {
            return this.m_username;
        }

        set EmailAddress(emailAddress) {
            this.m_emailAddress = emailAddress;
        }

        get EmailAddress() {
            return this.m_emailAddress;
        }

        set Password(password) {
            this.m_password = password;
        }

        get Password() {
            return this.m_password;
        }

        toString() {
            return `Display Name:${this.DisplayName}\n Email Address:${this.EmailAddress}\n Username:${this.Username}`;
        }

        toJSON() {
            return {
            "DisplayName"
        :
            this.DisplayName,
            "EmailAddress"
        :
            this.EmailAddress,
            "UserName"
        :
            this.Username,
            "Password"
        :
            this.Password
        }
    }
        fromJSON(){

                this.DisplayName = data.DisplayName
                this.EmailAddress = data.EmailAddress
                this.Username = data.Username
                this.Password = data.Password
        }

        Serialize() {
            if (this.DisplayName != "" && this.EmailAddress != "" && this.Username != ""  && this.Password != "") {
                return `${this.DisplayName}, ${this.EmailAddress}, ${this.Username}, ${this.Password},`;
            }
            console.error("one or more of the properties are missing or invalid");
            return null;

        }

        Deserialize(data) {
            let propertyArray = data.split(",");
            this.DisplayName = propertyArray[0];
            this.EmailAddress = propertyArray[1];
            this.Username = propertyArray[2];
            this.Password = propertyArray[3];

        }


    }
    core.User = User;

})(core || (core = {}));