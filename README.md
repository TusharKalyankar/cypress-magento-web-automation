#Cypress Web Automation 

## Project Overview
This project automates Magento website for Cypress Cucumber framework using Javascript, covering:
- Test the sign up flow [Positive+ Negative test cases included].
- Automate creating an account on the website and signing in with that account.

## How to Run the Tests
1. Install dependencies:
   ```sh
   npm install

2. Run Cypress tests (Headless Mode):
   ```sh
   npx cypress run --browser <browser_name>
Note: If not included browser it will default run on Electron browser

3. Run Cypress tests (Headless Mode):
   ```sh
   npx cypress run --browser <browser_name> --headed
Note: If not included browser it will default run on Electron browser

4. Run Manually via Cypress Runner:
   ```sh
   npx cypress open
