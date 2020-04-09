# Dashboard

## Get Weather, Stock Price and Covid-19 updates
![dashboard](/public/dashboard.png "Image of dashboard")

### MetaWeather API

## Search Weather Forecast

<p align="center">
<img src="https://media.giphy.com/media/jpuTiA9L2R0GX8JNte/giphy.gif" slt="Giphy of weather search functionality" width="700">
<p>

### Alpha Vantage API 

#### Search Stock Prices
<p align="center">
<img src="https://media.giphy.com/media/KFVgvFRy2rtnsK8mnA/giphy.gif" alt="Giphy of stock price search functionality" width="300">
</p>

### COVID-19 API
#### Search new coronavirus cases, death toll and recovered cases

<p align="center">
<img src="https://media.giphy.com/media/JUjV37ksKIMl1sdLt5/giphy.gif" alt="Giphy of stock price search functionality" width="700">
</p>

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
https://weatherstockcovid19.herokuapp.com/

## :wrench: Technologies

- HTML
- CSS
- JavaScript
- Material UI
- React
- Node
- Moment.js
- [MetaWeather API](https://www.metaweather.com/)
- [Alpha Vantage](https://www.alphavantage.co/)
- [COVID-19 API](https://covid19api.com/)


## :sparkles: Credits

- Icons
    - Icons made by <a href="https://www.flaticon.com/authors/inipagistudio" title="inipagistudio">inipagistudio</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    - Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
   - <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>