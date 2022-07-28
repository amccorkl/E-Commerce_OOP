# E-Commerce OOP
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry. This app, which functions from within the terminal command line, allows a ficticious company to create and manage their records in a MYSQL database. Written in Javascript, it uses Node.js, Express.js and Sequelize, it is deployed using Node.js with api interaction on Insomnia. 


## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

<details>
<summary><strong>Table of Contents</strong></summary>

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing Guidelines](#contributing-guidelines)
- [Tests](#tests)
- [Languages, Skills and Credits](#languages-skills-and-credits)
- [Screenshot and Walkthrough](#screenshot-and-walkthrough)
- [Questions and Links](#questions-and-links)
</details>


## Installation 
```
Clone the repository
Run npm init and then npm install
Add your MySQL credentials to the .env file
Run the schema.sql
Seed the database using: npm run seed
```

## Usage
From the root directory, type node or nodemon index.js

## License
Distributed under the **MIT** license.

## Contributing Guidelines
Contributions help our open source community to continue to evolve, and any contributions are greatly appreciated. If you have a suggestion that would improve this code please follow the directions below. I require that any and all changes adhere to the Code of Conduct outlined in the [Contributor Covenant](https://www.contributor-covenant.org/).

## Tests
There are currently no tests written for this application.

## Languages, Skills and Credits
- Javascript
- Node.js
- [express](https://www.npmjs.com/package/express) webserver framework for Node.js
- [sequelize](https://www.npmjs.com/package/sequelize) to execute SQL code and CRUD operations
- [mysql2](https://www.npmjs.com/package/mysql2) to initialize the database
- [dotenv](https://www.npmjs.com/package/dotenv) used to host credentials in the environment file 

## Screenshots and Video walkthrough
- [Setting up and connecting to the database](https://)
- [Creating, Reading, Updating and Deleting data in the database](https://)

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)


## Questions and Links
[My Github repository](https:// )

