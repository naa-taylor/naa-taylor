(function(){

    function UpdateNavBar(){

        let newPojectlink = document.createElement("a")
        newPojectlink.textContent= " projects";
        document.getElementById("products").appendChild(newPojectlink);

        let newHRlink = document.createElement("a");
        newHRlink.href = "Human Resources.html";
        newHRlink.textContent = "Human Resources";
        document.getElementById("HrLink").appendChild(newHRlink)


    }

    /**
     * instatiate and contact to local storage
     * @param {string}fullName
     * @param {string}contactNumber
     * @param {string}emailAddress
     */
    function AddContact(fullName, contactNumber, emailAddress){
        let contact = new Contact(fullName, contactNumber, emailAddress);
        if(contact.Serialize()) {
            let key = contact.FullName.substring(0, 1) + Date.now();
            localStorage.setItem(key, contact.Serialize());
        }
    }
    function DisplayHomePage(){
        console.log("display home Page called!");

        $("#AboutUs").on("click", () => {
            location.href = "about.html";
        });

        //add text to the main tag using JQuery
        $("main").append(`<p id="mainParagraph" class="mt-3">This is the main paragraph</p>`)

        $("body").append(`<article class="container">
        <p id="articleParagraph" class="mt-3">This is the article paragraph</p>
        </article>`)

        // let title = document.createElement("h3");
        //
        // title.setAttribute("id", "MainTitle");
        // title.setAttribute("class","mt-5");
        // title.textContent = "Welcome to the Nvision site";

        // MainContent.appendChild(title);
        // document.body.style.backgroundColor = "pink";

    }


    function DisplayProductsPage() {
        let Main = document.getElementsByTagName("main")[0];

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
        textNode4.innerHTML = "Another great project we were blessed to take part in was creating one of the \n "+
            "first online kitchen. a company reached out to us with the great idea of creating an \n" +
            " online kitchen for professionals and home cooks. this website helps cooks with meals and \n"+
            "ingredients as wel as in detailed instructions to make the best resturaunt style meals. \n";
        document.getElementById("col-2").appendChild(textNode4);


        let textNode5 = document.getElementById("project3");
        textNode5.innerHTML = "Safe Space Care";
        document.getElementById("col-3").appendChild(textNode5);

        let textNode6 = document.getElementById("para3");
        textNode6.innerHTML = "this Project is the most recent successful projects we partook in. this website was \n"+
            "made for a non-profit organization that specializes in provide education about healthy \n " +
            "life-styles and providing urgent care and health needs to third-world countries and low \n " +
            "budget communities\n";
        document.getElementById("col-3").appendChild(textNode6);
    }
    function DisplayServicesPage(){
        let heading1 = document.getElementById("heading-1");
        heading1.innerHTML = "identifying";
        let heading2 = document.getElementById("heading-2");
        heading2.innerHTML = "strategizing";
        let heading3 = document.getElementById("heading-3");
        heading3.innerHTML = "Implementing";
        let textNode1 = document.getElementById("para1");
        textNode1.innerHTML ="We begin by understanding your brand: what challenges are you facing and how can we \n" +
            "position you in a distinctive and differentiated way to resonate with your intended customers";
        let textNode2 = document.getElementById("para2");
        textNode2.innerHTML = "We are able to establish your core brand territory, audience segmentation, \n" +
            "and clearly define long- and short-term marketing objectives";
        let textNode3 = document.getElementById("para3");
        textNode3.innerHTML = "Through ways of identifying and strategizing with our clients needs and objectives, \n" +
            "we are then able to strategically identify which platforms make sense considering your brand, audience \n " +
            "and business goals";
    }

    function DisplayAboutUsPage(){
        let pageTitle = document.getElementById("pg-title");
        pageTitle.innerHTML = "About Us";
        let textNode = document.getElementById("paragraph");
        textNode.innerHTML = "my name is naa-adjoa I am a second year durham college student studying \n" +
            "computer programming and analysis. alongside with studying i am able to implement knowledge \n" +
            "in programming and web design with the web design company that i co-manage in called Nvision.";
    }

    function DisplayContactPage(){

        console.log("Contact Us Page")

        let SendButton = document.getElementById("sendButton");
        let subcribeCheckbox = document.getElementById("suscribecheckbox");

        SendButton.addEventListener("click", function(event){

                if(subcribeCheckbox.checked){

                    let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                    if(contact.Serialize()){
                        let key = contact.FullName.substring(0,1) + Date.now();
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
                let contact = new Contact();
                contact.Deserialize(contactData);
                data += `<tr><th scope="row" class="text-center">${index}</th>
                        <td>${contact.FullName}</td>
                        <td>${contact.ContactNumber}</td>
                        <td>${contact.EmailAddress}</td>
                        <td class="text-center">
                        <button value="" class="btn btn-primary btn-sm edit">
                        <i class="fas fa-edit fa-sm">Edit</i>
                        </button>
                        </td>
                        <td>
                        <button value="" class="btn btn-primary btn-sm edit">
                        <i class="fas fa-edit fa-sm">delete</i>
                        </button>
                        </td>
                        </tr>`
                index++;
            }
            contactList.innerHTML = data;

            $("#addButton").on("click", () => {
                location.href = "edit.html#add"
            });

            $("button.delete").on("click", function () {

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

    function createFoot() {
        let f = document.createElement("footer");
        f.setAttribute("class","text-center p-4 ")

        document.body.appendChild(f);
        let p = document.createElement("P");
        let txt = document.createTextNode("Copyright ©, 2023");
        p.appendChild(txt);
        f.appendChild(p);
    }

    function DisplayEditPage(){
        console.log("DisplayEditPage called")

        let page = location.hash.substring(1);
        switch (page){
            case "add":
                //using Jquery from the main we override the h1 element and change text
                $("main>h1").text("Add Contact");
                //override the edit button to add
                $("#editButton").html(`<i class="fas fa-plus-circle  fa-sm"></i> Add`)

                //accept the event (submit) and prevent the submission which is not what we want
                $("#editButton").on("click", (event)=> {
                    event.preventDefault();
                    AddContact(fullName.value, contactNumber.value, emailAdress.value);
                    location.href = "contactlist.html"
                });
                //create an event for cancel btn when clicked
                $("#cancelButton").on("click", ()=> {
                    location.href = "contactlist.html";
                })
                break;
            default:{
                //edit
                let contact  = new Contact() ;
                contact.Deserialize(localStorage.getItem(page));

                $("$fullName").val(contact.FullName);
                $("$contactNumber").val(contact.ContactNumber);
                $("$emailAddress").val(contact.Email);

                $("#editButton").on("click", (event)=> {
                    event.preventDefault();

                    contact.FullName = $("#fullName").val();
                    contact.ContactNumber = $("#contactNumber").val();
                    contact.Email = $("#emailAddress").val();

                    localStorage.setItem(page, contact.Serialize());

                    location.href = "contactlist.html"
                });
                //create an event for cancel btn when clicked
                $("#cancelButton").on("click", ()=> {
                    location.href = "contactlist.html";
                });
            }
                break;
        }
    }
    function Start(){
        console.log("App Started!")
        switch(document.title)
        {
            case "Home":
                UpdateNavBar();
                DisplayHomePage();
                createFoot();
                break;
            case "Products" || "projects":
                UpdateNavBar();
                DisplayProductsPage();
                createFoot();
                break;
            case "About Us":
                UpdateNavBar();
                DisplayAboutUsPage();
                createFoot();
                break;
            case "Our Services":
                UpdateNavBar();
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
            // case "Edit Contact":
            //     UpdateNavBar();
            //     DisplayEditPage();
            //     createFoot();
            //     break;
        }
    }
    window.addEventListener("load", Start)

})()