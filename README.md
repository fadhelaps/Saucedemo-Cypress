# SauceDemo with Cypress Web Automation

This project is a web automation testing project using **Cypress** with **Page Object Model (POM)** structure.  
HTML test reports are generated using **Mochawesome**.

---

## 🛠 Tech Stack
- Node.js (LTS)
- Cypress
- JavaScript
- Mochawesome (HTML Report)

---

## Make Sure You Have Installed
- Node.js
- NPM 

--

## Install Dependencies
Clone the repository and install dependencies:
- npm install

## Run Cypress (Interactive Mode)
this command doesnt generate report
- npm cypress open

## Run Cypress (Headless Mode)
this command generate report
- npx cypress run

After running, report files will be generated in:
cypress/reports/

## Generate HTMl Report
- npx mochawesome-merge cypress/reports/*.json > cypress/reports/report.json
- npx marge cypress/reports/report.json -o cypress/reports/html

after generate HTML report is done, you can open HTML file in a browser

