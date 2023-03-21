class Contact {
    constructor(fullName, contactNumber, emailAddress) {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.Email = emailAddress;
    }

    set FullName(fullName) {
        this.m_fullName = fullName;
    }

    get FullName() {
        return this.m_fullName;
    }

    set ContactNumber(contactNumber) {
        this.m_contactNumber = contactNumber;
    }

    get ContactNumber() {
        return this.m_contactNumber;
    }

    set EmailAddress(emailAddress) {
        this.m_emailAddress = emailAddress;
    }

    get EmailAddress() {
        return this.m_emailAddress;
    }

    toString() {
        return `full Name:${this.FullName}, Contact Number:${this.ContactNumber}, Email:${this.EmailAddress}`;
    }

    Serialize() {
        if (this.FullName != "" && this.ContactNumber != "" && this.EmailAddress != "") {
            return `${this.FullName}, ${this.ContactNumber} , ${this.EmailAddress}`;
        }
        console.error("one or more of the properties are missing or invalid");
        return null;

    }

    Deserialize(data) {
        let propertyArray = data.split(",");
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];

    }
}
