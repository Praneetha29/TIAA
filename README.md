# FinWise - Towards a FIRE-Centric Future

## Introduction

FinWise is an all-in-one retirement planning solution aimed at promoting Financial Independence, Retire Early (FIRE). Developed by Midatana Sai Praneetha from the National Institute of Technology, Rourkela, this project addresses key pain points in the financial planning process, such as lack of personalized retirement planning, ineffective income optimization, and behavioral finance challenges.

## Pain Points Addressed

- Generic Advice: Overcoming the limitations of traditional retirement tools that offer one-size-fits-all advice.
- Risk Oversight: Addressing the risk tolerance of users for more optimal investment strategies.
- Budgeting Struggles: Helping users manage their finances better to avoid overspending and under-saving for retirement.
- Missed Income Opportunities: Identifying ways to enhance income through optimized investments and side gigs.
- Behavioral Oversights: Incorporating behavioral insights into financial planning.

## Solution Approach

FinWise leverages advanced technologies to offer:

- Personalized financial assessments.
- Real-time expense tracking with AI-based suggestions.
- Investment insights and early retirement assessments.
- Real-time support through an interactive chatbot.
- Tailored investment strategies incorporating behavioral insights and market updates.

## Tech Stack

- Backend authentication, storage, and APIs.
- Primary language for backend development: [Specify Language]
- Central database for streamlined database management: [Specify Database]
- Crafting visually appealing and dynamic user interfaces: [Specify Technologies]
- Core LLM library for interpreting and producing responses.
- Data visualizations: [Specify Tools]

## Key Features

- In-depth Financial Assessment
- Real-time Expense Tracking
- Behavioral Finance Insights
- Investment Insights
- Educational Insights

## Future Scope

- Personalized Investment Alerts
- Collaborative Planning Hub
- Automated Tax Optimization

## Business Scope

- Premium Financial Advisory Services
- Sustainable Investment Portfolio Management Fees
- Partnerships and Integrations

## Installation & Usage

### How to Get Started

Welcome to our React application with a FastAPI backend! Follow these steps to get the application up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (which comes with npm)
- Python (version 3.7 or above)
- pip

Additionally, an integrated development environment (IDE) like Visual Studio Code is recommended for a better coding experience.

### Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/Praneetha29/TIAA.git
cd TIAA
```

## Setting Up the Backend

To set up the FastAPI backend:

1. Navigate to the backend directory:

    ```bash
    cd backend
    ```

2. Create a virtual environment:

    ```bash
    python3 -m venv env
    ```

3. Activate the virtual environment:

   - On Windows:

    ```bash
    env\Scripts\activate
    ```

   - On MacOS/Linux:

    ```bash
    source env/bin/activate
    ```

4. Install the required Python dependencies:

    ```bash
    pip install -r requirements.txt
    ```

5. Start the FastAPI server:

    ```bash
    uvicorn main:app --reload
    ```

   The `--reload` flag enables automatic reloading of the server upon file changes, which is useful during development.

## Setting Up the Frontend

Once your backend is up and running, let's set up the frontend:

1. Exit the backend directory and go back to the root of the project:

    ```bash
    cd ..
    ```

2. Install the node modules required for the React app:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

Your default web browser should open automatically and navigate to http://localhost:3000, where you can see the React app running.
