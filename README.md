# Documentation
This web application facilitates online registration at a hotel. Although up to 10 guests can check in together in one hotel room, the registration process requires only the name and phone number of the guest who is completing the form. Therefore, the guest quantity field must be filled in, along with the number of days to stay. Finally, the check-in date is required to indicate the start of the registration.

Before locally running the application, several steps must be done. Firstly, by opening a new terminal, the ‘npm install’ command needs to be written to install the node_modules folder with all modules inside. After installing dependencies from the package.json, the project can be run with the ‘npm start’ command.

The application dependencies’ list  includes body-parser, express, express-validator, nodemon, and pug modules.

The public repository in GitHub was created to upload this application from the start: https://github.com/Dilnoza1203/wt_hotel_reception_system_00017042/

# Project structure
The project structure is organized with folders that represent logical names and necessary files. Starting with the data folder, it contains a mock_db.json file to store all registered data. To display, edit, and delete this data, a view folder contains Pug files where the HTML head is included in the home and add/update pages. The style of these pages is modified within the public/styles folder linked to that HTML head. Additionally, folders named controllers, routes, services, and validators contain logically named files and directories with fully functional CRUD operations.