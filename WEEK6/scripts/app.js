(function(){

    // function UpdateNavBar(){
    //
    //     let newPojectlink = document.createElement("a")
    //     newPojectlink.textContent= " projects";
    //     document.getElementById("products").appendChild(newPojectlink);
    //
    //     let newHRlink = document.createElement("a");
    //     newHRlink.href = "Human Resources.html";
    //     newHRlink.textContent = "Human Resources";
    //     document.getElementById("HrLink").appendChild(newHRlink)
    //
    //
    // }
    function createFoot() {
        let f = document.createElement("footer");
        f.setAttribute("class", "text-center p-4 ")

        document.body.appendChild(f);
        let p = document.createElement("P");
        let txt = document.createTextNode("Copyright ©, 2023");
        p.appendChild(txt);
        f.appendChild(p);
    }

    //pass in the http method, pass in the resource, then the function callback from response
    function AjaxRequest(method, url, callback){
        //Step 1 :Ajax call
        let xhr = new XMLHttpRequest();

        //Step 2: check state to see if was successful
        xhr.addEventListener("readystatechange", () => {

            if(xhr.readyState === 4 && xhr.status === 200){
                //console.log(xhr.responseText);
                if(typeof callback === "function"){
                    callback(xhr.responseText)
                }else {
                    console.error("Error: Please provide valid function for callback");
                }

            }
        });
        //step 3: load in the request using GET method
        xhr.open(method, url);

        //step 4: send the request
        xhr.send();
    }
    
    function LoadHeader(data) {
        //injecting the header to the html page using jquery
        $("header").html(data);

        //using jquery to recognise the active link
        $(`li>a:contains("Home")`).addClass("active");

        CheckLogin();
    }
    function DisplayHomePage() {
        console.log("display home Page called!");

        //Step 1 :Ajax call
        let xhr = new XMLHttpRequest();

        //Step 2: check state to see if was successful
        xhr.addEventListener("readystatechange", () => {

            if(xhr.readyState === 4 && xhr.status === 200){

                //console.log(xhr.responseText);
                //injecting the header to the html page using jquery
                $("header").html(xhr.responseText);
                //using jquery to recognise the active link
                $(`li>a:contains("Home")`).addClass("active");
            }

        });
        //step 3: load in the request using GET method
        xhr.open("GET", "header.html");

        //step 4: send the request
        xhr.send();

        $("#AboutUs").on("click", () => {
            location.href = "about.html";
        });
        //add text to the main tag using JQuery
        $("main").append(`<p id="mainParagraph" class="mt-3">This is the main paragraph</p>`)

        $("body").append(`<article class="container">
        <p id="articleParagraph" class="mt-3">This is the article paragraph</p>
        </article>`)


    }

        function DisplayProductsPage() {
           // let Main = document.getElementsByTagName("main")[0];

            let textNode1 = document.getElementById("project1");
            textNode1.innerHTML = "Gavel & Partners";
            document.getElementById("col-1").appendChild(textNode1);

            let textNode2 = document.getElementById("para1");
            textNode2.innerHTML = "One of our top favourite projects was creating and developing a website \n " +
                "for one of the top law firms of the city. the company reached out to us and gave us their\n " +
                "business model and requirements need for the website. we then created and perfected a fully \n" +
                "functioning website that met our clients business requirements.\n";
            document.getElementById("col-1").appendChild(textNode2);


            let textNode3 = document.getElementById("project2");
            textNode3.innerHTML = "My Online Kitchen";
            document.getElementById("col-2").appendChild(textNode3);

            let textNode4 = document.getElementById("para2");
            textNode4.innerHTML = "Another great project we were blessed to take part in was creating one of the \n " +
                "first online kitchen. a company reached out to us with the great idea of creating an \n" +
                " online kitchen for professionals and home cooks. this website helps cooks with meals and \n" +
                "ingredients as wel as in detailed instructions to make the best resturaunt style meals. \n";
            document.getElementById("col-2").appendChild(textNode4);


            let textNode5 = document.getElementById("project3");
            textNode5.innerHTML = "Safe Space Care";
            document.getElementById("col-3").appendChild(textNode5);

            let textNode6 = document.getElementById("para3");
            textNode6.innerHTML = "this Project is the most recent successful projects we partook in. this website was \n" +
                "made for a non-profit organization that specializes in provide education about healthy \n " +
                "life-styles and providing urgent care and health needs to third-world countries and low \n " +
                "budget communities\n";
            document.getElementById("col-3").appendChild(textNode6);
        }

        function DisplayServicesPage() {
            let heading1 = document.getElementById("heading-1");
            heading1.innerHTML = "identifying";
            let heading2 = document.getElementById("heading-2");
            heading2.innerHTML = "strategizing";
            let heading3 = document.getElementById("heading-3");
            heading3.innerHTML = "Implementing";
            let textNode1 = document.getElementById("para1");
            textNode1.innerHTML = "We begin by understanding your brand: what challenges are you facing and how can we \n" +
                "position you in a distinctive and differentiated way to resonate with your intended customers";
            let textNode2 = document.getElementById("para2");
            textNode2.innerHTML = "We are able to establish your core brand territory, audience segmentation, \n" +
                "and clearly define long- and short-term marketing objectives";
            let textNode3 = document.getElementById("para3");
            textNode3.innerHTML = "Through ways of identifying and strategizing with our clients needs and objectives, \n" +
                "we are then able to strategically identify which platforms make sense considering your brand, audience \n " +
                "and business goals";
        }

        function DisplayAboutUsPage() {
            let pageTitle = document.getElementById("pg-title");
            pageTitle.innerHTML = "About Us";
            let textNode = document.getElementById("paragraph");
            textNode.innerHTML = "my name is naa-adjoa I am a second year durham college student studying \n" +
                "computer programming and analysis. alongside with studying i am able to implement knowledge \n" +
                "in programming and web design with the web design company that i co-manage in called Nvision.";
        }
    /**
     * instatiate and contact to local storage
     * @param {string}fullName
     * @param {string}contactNumber
     * @param {string}emailAddress
     */
    function AddContact(fullName, contactNumber, emailAddress){
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if(contact.Serialize()) {
            let key = contact.FullName.substring(0, 1) + Date.now();
            localStorage.setItem(key, contact.Serialize());
        }
    }

        function DisplayContactPage() {

            console.log("Contact Us Page")

            //call function for each field validation
            ContactFormValidation();

            let SendButton = document.getElementById("sendButton");
            let subcribeCheckbox = document.getElementById("suscribecheckbox");

            SendButton.addEventListener("click", function (event) {

                if (subcribeCheckbox.checked) {

                    let contact = new core.Contact(fullName.value, contactNumber.value, emailAddress.value);
                    if (contact.Serialize()) {
                        let key = contact.FullName.substring(0, 1) + Date.now();
                        localStorage.setItem(key, contact.Serialize());
                    }
                    //console.log("checkbox checked!")
                }
                //AddContact(fullName.value, contactNumber.value, emailAdress.value);



            });
        }

        function DisplayContactlistPage() {

            console.log("contact list page");

            if (localStorage.length > 0) {
                let contactList = document.getElementById("contactList");
                let data = " ";

                let keys = Object.keys(localStorage);

                let index = 1;
                for (const key of keys) {
                    let contactData = localStorage.getItem(key);
                    let contact = new core.Contact();
                    contact.Deserialize(contactData);

                    data += `<tr><th scope="row" class="text-center">${index}</th>
                        <td>${contact.FullName}</td>
                        <td>${contact.ContactNumber}</td>
                        <td>${contact.EmailAddress}</td>
                        
                        <td class="text-center">
                        <button value="${key}" class="btn btn-primary btn-sm edit">
                        <i class="fas fs-edit fa-sm">Edit</i></button>
                        </td>
                        
                        <td class="text-center">                    
                        <button value="${key}" class="btn btn-danger btn-sm delete">
                        <i class="fas fa-trash-alt fa-sm">delete</i></button></td>
                        </tr>`
                    index++;
                }
                contactList.innerHTML = data;

                $("#addButton").on("click", () => {
                    location.href = "edit.html#add"
                });

                $("button.delete").on("click", function () {
                    // confirm delete
                    if (confirm("are you sure you want ot delete contact")) {
                        localStorage.removeItem($(this).val())
                    }
                    location.href = "contactlist.html";
                });

                $("Button.edit").on("click", function () {
                    location.href = "edit.html#" + $(this).val();
                });

            }
        }

        function DisplayEditPage() {
            console.log("Edit Contact Page")

            let page = location.hash.substring(1);
            switch (page) {
                case "add":
                    ContactFormValidation()
                    //using Jquery from the main we override the h1 element and change text
                    $("main>h1").text("Add Contact");
                    //override the edit button to add
                    $("#editButton").html(`<i class="fas fa-plus-circle  fa-sm"></i> Add`)

                    //accept the event (submit) and prevent the submission which is not what we want
                    $("#editButton").on("click", (event) => {
                        event.preventDefault();
                        AddContact(fullName.value, contactNumber.value, emailAddress.value);
                        location.href = "contactlist.html"
                    });
                    //create an event for cancel btn when clicked
                    $("#cancelButton").on("click", () => {
                        location.href = "contactlist.html";
                    })
                    break;
                default: {
                    ContactFormValidation()
                    //edit
                    //get contact information from localStorage
                    let contact = new core.Contact();
                    contact.Deserialize(localStorage.getItem(page));

                    //display the contact info in the edit form
                    $("$fullName").val(contact.FullName);
                    $("$contactNumber").val(contact.ContactNumber);
                    $("$emailAddress").val(contact.EmailAddress);

                    //when edit button is pressed - Update the contact
                    $("#editButton").on("click", (event) => {

                        event.preventDefault();
                        //get changes from Form
                        contact.FullName = $("#fullName").val();
                        contact.ContactNumber = $("#contactNumber").val();
                        contact.Email = $("#emailAddress").val();

                        //replace the item in local Storage
                        localStorage.setItem(page, contact.Serialize());

                        //return to the contact list Page
                        location.href = "contactlist.html"
                    });
                    //create an event for cancel button when clicked
                    $("#cancelButton").on("click", () => {
                        location.href = "contactlist.html";
                    });
                }
                    break;
            }
        }

        /**
         *
         * @param {string}input_field_id
         * @param {RegExp}regular_expression
         * @param {string}error_message
         */
        function ValidateField(input_field_id, regular_expression, error_message){

            //Retrieve message area (id=”messageArea”) –using Jquery
            let messageArea= $("#messageArea").hide();

            $(input_field_id).on("blur", function (){
                let inputFieldText = $(this).val();
                if(!regular_expression.test(inputFieldText)){
                    //fails validation
                    $(this).trigger("focus").trigger("select")
                    messageArea.addClass("alert alert-danger").text(error_message).show();
                }else{
                    //passes Validation
                    messageArea.removeAttr("class").hide();
                }
            });

        }
        function ContactFormValidation()
        {
            ValidateField("#fullName", /^([A-Z][a-z]{1,3}\.?\s)?([A-Z][a-z]+)+([\s,-]([A-Z][a-z]+))*$/,
                "Please enter a valid first Name and lastName");

            ValidateField("#contactNumber", /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]\d{4}$/,
                "Please enter a valid phone contact number.");

            ValidateField("emailAddress", /^[a-zA-z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-Z]{2,10}$/,
                "Please enter a valid email address");
        }
        function DisplayLoginPage(){
            console.log("login page!")

            let messageArea = $("#messageArea")
            messageArea.hide();

            $("#loginButton").on("click", function(){

                let success = false;
                let newUser = new core.User();

                $.get("./data/user.json", function (data){
                    for (const U of data.users){

                        if(username.value === U.Username && password.value === U.Password){
                            success = true;
                            newUser.fromJSON(U);
                            break;
                        }
                    }
                    if (success){
                        sessionStorage.setItem("user", newUser.Serialize());
                        messageArea.removeAttr("class").hide();
                        location.href = contactlist.html;

                    }else{
                        //fail authentication
                        $("#username").trigger("focus").trigger("select")
                        messageArea.addClass("alert alert-danger").text("error: failed" +
                            "to authenticate, please check your credentials")
                    }
                });
            });
            $("#cancelButton").on("click", function (){

                //reference the form using DOM reference
                document.forms[0].reset();
                location.href = "index.html";
            });
        }
        function CheckLogin(){
            //check if user is looged in
            if(sessionStorage.getItem("user")){
                $("#Login").html(`<a id="logout" class ="nav-link" href="#">
                    <i class ="fa-solid fa-sign-out-alt"></i> Logout</a>`)
            }
            $("#logout").on("click", function(){
                sessionStorage.clear();
                location.href = "index.html";
            });
        }

        function DisplayRegisterPage(){
            console.log("Register page!")

        }

    function Start() {
            console.log("App Started!")
            AjaxRequest("GET", "header.html", LoadHeader)
            switch (document.title) {
                case "Home":
                    //UpdateNavBar();
                    DisplayHomePage();
                    createFoot();
                    break;
                case "Products" || "projects":
                    //UpdateNavBar();
                    DisplayProductsPage();
                    createFoot();
                    break;
                case "About Us":
                    //UpdateNavBar();
                    DisplayAboutUsPage();
                    createFoot();
                    break;
                case "Our Services":
                    //UpdateNavBar();
                    DisplayServicesPage();
                    createFoot();
                    break;
                case "Contact Us":
                    //UpdateNavBar();
                    DisplayContactPage();
                    createFoot();
                    break;
                case "Contact List":
                    //     UpdateNavBar();
                    DisplayContactlistPage();
                    createFoot();
                    break;
                case "Edit Contact":
                    //     UpdateNavBar();
                    DisplayEditPage();
                    createFoot();
                    break;
                case "Login":
                    DisplayLoginPage();
                    createFoot();
                    break;
                case "Register":
                    DisplayRegisterPage();
                    createFoot();
                    break;
            }
        }

        window.addEventListener("load", Start)

})()