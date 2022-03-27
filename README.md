1. We need to download the zip folder conssiting the entire file and extract it in local computer. The link is: https://github.com/Pankaj89Acharjee/space-X.git

2. After extracting the file in local computer we need to open MS Visual Studio Code and need to open Terminal by pressing Ctrl + J.

3. In the terminal we need to locate our extracted folder that we have downloaded so far. Let the file was extracted was extracted on desktop, then the path in the terminal would be "cd desktop" and press enter and then type cd <App_Name>.

4. After the folder is being located, we need to install all the packages and also we need to install the npm. [NOTE: Node.js must be installed before running all the packages. Node Version 14.18.0 must be installed in the computer from the internet]

5. Commands for installing npm is "npm install" and package.json is to be installed by "npm init" command in the terminal.

6. Then we need to install all the packages. 

    "@testing-library/jest-dom": "^5.16.3",
    "@testing-library/react": "^12.1.4",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.26.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.0.1",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"

    The above packages can be installed by the following command: 
     
     npm install react react-router-dom@5.0.1 axios react-dom react-scripts 

     This will install all the packages in the folder.

7. When all the above packages is being installed in the computer, then we need to command the following in the terminal:

        npm run build

        npm start

    This will run the application in the localhost://3000 # space-X
