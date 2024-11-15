Newsletter API Project
Description
This is a simple newsletter signup application built with Node.js and Mailchimp API. Users can sign up for the newsletter by entering their first name, last name, and email. The data is then sent to the Mailchimp API to add them to a Mailchimp list.

Technologies Used
Node.js: JavaScript runtime used to build the server-side of the application.
Express: Web framework for Node.js to create the routes and handle requests.
Body-Parser: Middleware to parse incoming request bodies.
Mailchimp API: API to integrate Mailchimp's email list service.
Features
Simple form to collect user information.
Integration with Mailchimp to manage email lists.
Success and failure pages for user feedback.
Installation
Clone the repository:

bash
git clone https://github.com/Shreyansh-HelloWorld/newsletter-api-project.git
Navigate into the project directory:

bash
cd newsletter-api-project
Install dependencies:

bash
npm install
or, if using Yarn:

bash
yarn install
Set up your Mailchimp API key and List ID:

Create a .env file in the root of the project.
Add your Mailchimp API key and List ID:
bash
MAILCHIMP_API_KEY=your_api_key_here
MAILCHIMP_LIST_ID=your_list_id_here
You can obtain your API key and List ID by following Mailchimp's API documentation.
Start the application:

bash
npm start
or, if using Yarn:

bash
yarn start
Live Website
You can check out the live version of the website at https://newsletter-api-project.onrender.com/.

Contributing
Feel free to fork the project and create pull requests if you want to contribute. Please make sure to write tests for your contributions and ensure the project works as expected.

License
This project is licensed under the MIT License.

Made by Shreyansh Singh
