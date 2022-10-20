# 👩🏻‍⚕️ Aesculapius Scheduling Center 👨🏻‍⚕️

The initiative is to facilitate the scheduling of medical appointments with professionals from different areas of health. There are initially three profiles, the Patient, the Doctor - which can be any healthcare professional - and the Admin. To use the program, simply register, informing common data such as name, CPF (for the health professional, the CRM, CRE, CRO or CRP number for example), address for example. Patients will be able to search for which doctor will be available at the time they need it, they will be able to see their own appointments, change their dates and times, change professionals or even cancel an appointment. The doctor, on the other hand, will be able to share available times and days for patient care, view their appointments for the day and cancel a pre-booked appointment.

<br>

<p align=center>
<img src="./main/src/assets/readme/logo.png" width=300px>
<p>


<br>

<br>


![Markdown](https://img.shields.io/badge/-Markdown-black?style=flat&logo=markdown)&nbsp;
![MySql](https://img.shields.io/badge/-MySql-black?style=flat&logo=mysql)&nbsp;
![Eclipse](https://img.shields.io/badge/-Eclipse-black?style=flat&logo=eclipse-ide&logoColor=orange)
![Spring Tool Suite](https://img.shields.io/badge/-Spring%20Tool%20Suite-black?style=flat&logo=Spring&logoColor=green)&nbsp;
![Visual Studio Code](https://img.shields.io/badge/-Visual%20Studio%20Code-black?style=flat&logo=visual-studio-code&logoColor=007ACC)&nbsp;

## 1st step : Prototyping 👨🏻‍🎨
### Technologies
![Figma](https://img.shields.io/badge/-Figma-black?style=flat&logo=figma)&nbsp;

One of the most important parts of developing, its prototype the system, because it makes the process of structuring the application a lot easier when comes about designing the screens. Thinking about it, Orange Team took some hours and a lot of imagination to desing the system layout. We used Figma for this. Here is the preview :

<br>
<img src="./main/src/assets/readme/prototype.png">
<br>


<br>
<br>


## 2nd step: Define the project management 🤖
### Technologies
![Trello](https://img.shields.io/badge/-Trello-black?style=flat&logo=trello)&nbsp;

Another important point about development, it's to define the software to manage all the tasks on the backlog. For this, we used Trello.

<br>
<img src="./main/src/assets/readme/trello.png">
<br>
<br>
<br>


## 3rd step : Project Versioning 🧩
### Technologies
![Git](https://img.shields.io/badge/-Git-black?style=flat&logo=git)&nbsp;
![GitHub](https://img.shields.io/badge/-GitHub-black?style=flat&logo=github)&nbsp;

To manage the project versioning, we created an organization at Git. We organized the repositories between front-end and back-end.

<br>
<img src="./main/src/assets/readme/github.png">
<br>
<br>
<br>



## 4th step : Front end 🎨

### Technologies :  ![HTML](https://img.shields.io/badge/-HTML-black?style=flat&logo=HTML5)&nbsp; ![CSS](https://img.shields.io/badge/-CSS-black?style=flat&logo=CSS3&logoColor=1572B6)&nbsp; ![Bootstrap](https://img.shields.io/badge/-Bootstrap-black?style=flat&logo=bootstrap)&nbsp; ![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat&logo=javascript)&nbsp; ![Typescript](https://img.shields.io/badge/-Typescript-black?style=flat&logo=typescript)&nbsp; ![Angular](https://img.shields.io/badge/-Angular-black?style=flat&logo=angular&logoColor=red)&nbsp;


Basing our concepts on the best practices of the front end developing, we are using Angular, a typescript framework, developed by Google. Angular is a framework based on the component concept. Each part of the code can be a component, with their own logic and peculiarities. We organized the components based on the user access. We have the components to the patient, the professional and the admin.
Each one has their own services and models, that comunicate with the back end , sending  the requests.

<br>
<p align=center>
<img src="./main/src/assets/readme/vscode.png">
<p>

<br>
<details>
<summary> 🙋🏻‍♀️ Patient profile 🙋🏻‍♂️ </summary>
The patient can login using email and password. The main page shows some professionals and specialties. It also contains a floating action button to add new appointments.

<br>
<img src="./main/src/assets/readme/patient.gif">
<br>
</details>

<br>
<details>
<summary> 👩🏻‍⚕️ Professional profile 👨🏻‍⚕️ </summary>
The professional can login using crm and password. The professionals main page, shows the appointments by day, week or even month. Professional can edit personal information and shift information.
<br>
<img src="./main/src/assets/readme/professional.gif">
<br>
</details>

<br>
<details>
<summary> 👩🏻‍🏫 Admin profile 👩🏻‍🏫 </summary>
The Admin can login with username and password, the main page shows some dashboards with system data, admin can also manipulate professionals and admins.
<br>
<img src="./main/src/assets/readme/admin.gif">
<br>
</details>

</details>


<br>

## 5th step : Back end 📊
### Technologies
![Java](https://img.shields.io/badge/-Java-black?style=flat&logo=Java)&nbsp; 
![Node.js](https://img.shields.io/badge/-Node.js-black?style=flat&logo=node.js)&nbsp;
![Npm](https://img.shields.io/badge/-Npm-black?style=flat&logo=npm)&nbsp;
![Postman](https://img.shields.io/badge/-Postman-black?style=flat&logo=postman)&nbsp;
![Heroku](https://img.shields.io/badge/-Heroku-black?style=flat&logo=heroku)&nbsp;

To develop the back-end, we used Spring Boot (a Java framework) and Apache Maven to compile the application

<br>
<p align=center>
<img src="./main/src/assets/readme/backend-structure.gif">
<p>
<br>


## Structure and logic
> Starting from the config package: we have the configuration files


<br>