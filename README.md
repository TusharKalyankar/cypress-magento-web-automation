#Cypress Web Automation 

## Project Overview
This project automates Magento website for Cypress Cucumber framework using Javascript, covering:
- Test the sign up flow [Positive+ Negative test cases included].
- Automate creating an account on the website and signing in with that account.
- Includes video evidences in the videos folder under cypress folder.

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

## Project Structure

```
cypress/
  ├── tests/features/          # Test cases for Magento website in form of features
  ├── fixtures/example.json    # Stores Test data
  ├── support/pageObjects      # Page Objects for respective pages
  ├── support/step_definitions # Step definitions for respective features
  ├── support/utils.js         # Contains utilities for the project
  ├── videos/                  # Contains videos of the test execution
  ├── cypress.config.js        # Cypress configuration
```
Note: If you dont see any file, It might be under gitignore
