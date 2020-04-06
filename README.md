## Using MetaWeather API & Alpha Vantage API 


## 🔑 How to Run the App

#### Prerequisite
1. Make sure you have Node and Yarn (Javascript Package Manager) installed. 
    - You can use the following comands in terminal to check which version is installed 
2. Sign up for your free Alpha Vantage API Key [here](https://www.alphavantage.co/support/#api-key).
```
node -v  
yarn -v
```
The versions of node and yarn you currently have installed should appear. If you don't have them installed, follow Node installation instructions located [here](https://nodejs.org/en/download/) and Yarn installation instructions located [here](https://classic.yarnpkg.com/en/docs/install/#mac-stable). 

#### Clone the repository & Start the application
1. Open Terminal
2. Change the current working directory to the location where you want the cloned directory to be made.
3. Type git clone https://github.com/jerpowel321/weather.git
4. Press Enter. Your local clone will be created.
5. Navigate into the directory that you just cloned down 
6. Type <b> yarn install </b>  (this will install all dependencies)
7. Create a .env file <b>touch .env</b>
8. Open the the text file <b>open .env </b> and add the line <b>REACT_APP_STOCK_KEY=</b> and insert your issued API key from Alpha Vantage after the equals sign.
8. Run the program by typing <b> yarn start </b>

## :rocket: Deployed Site: 
https://needtrip.herokuapp.com/

## :wrench: Technologies

- HTML
- CSS
- JavaScript
- Material UI
- React
- Node
- [MetaWeather API](https://www.metaweather.com/)
- [Alpha Vantage](https://www.alphavantage.co/)