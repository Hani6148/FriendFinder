# Friend Finder

# Discription
This code repository consists of a Web server that serves web pages as well as API data. The Friend Finder App will basically handle a survey page to the client, who will be asked to enter his name and answer 10 questions about his personality before submitting it. After being submitted the user's data will be compared to other persons data stored in a local js file. The server will then send back the name and the picture of the person that best matches with the user's personality.

# installation

For this App we need 2 npm packages: express to create a web server and path to resolve file paths

![Screenshot](./captures/shot5.jpg)

use **npm i**  to install the packages shown in the package.json file

# Code Structure 

The Friend Finder App is structured like the following :

![Screenshot](./captures/shot1.jpg)


the public folder contains the html pages to render. 

friends.js contains the friend's data in a JSON format 

![Screenshot](./captures/shot2.jpg)

apiRoutes.js containes the routes of the REST API 

![Screenshot](./captures/shot3.jpg)

htmlRoutes contains the web pages routing

![Screenshot](./captures/shot4.jpg)



the server.js is the file that we will run using **Node server.js** command. in the server.js file we crerated the express web server and called the routing files to be used in the server.

![Screenshot](./captures/shot6.jpg)

# Demo

To run the server we use the command **node server.js**

![Screenshot](./captures/shot7.jpg)

after we start the server we open the web browser and initiate a get request with a route of "/" using this url: http://localhost:8080/

the server will then react by sending the home.html file
![Screenshot](./captures/shot8.jpg)

we then click on the go to survey button to request the survey.html file 

![Screenshot](./captures/shot9.jpg)

![Screenshot](./captures/shot10.jpg)


after completing the survey we click the submit button that will triger the following post request 

![Screenshot](./captures/shot11.jpg)

upon the reception of the post request the server will take the data object of the user and compare it to the other users in the friend array of object. the object of the best friend match will then be returned and displayed by the client (browser).

![Screenshot](./captures/shot12.jpg)

![Screenshot](./captures/shot13.jpg)
