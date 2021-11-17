* {
  padding: 0;
  margin: 0;
}
.container {
  flex-direction: column;
  display: flex;
  height: 100vh;
}
.container__item {
  background-color: white;
  top: 0;
}
.container__item--header {
  background-color: #3b27aa;
  height: 100px;
  display: flex;
}
.container__item--body {
  background-color: white;
  flex-grow: 1;
  bottom: 40px;
  display: flex;
}
.container__item--footer {
  background-color: #70358b;
  display: flex;
  height: 100px;
}
.container__item--busket {
  position: absolute;
  right: 20px;
  top: 10px;
}
@media screen and (max-height: 450px) {
  .container__item--sidenav {
    padding-top: 15px;
  }
  .container__item--sidenav a {
    font-size: 18px;
  }
}
.container__item--sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}
.container__item--sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}
.container__item--sidenav a:hover {
  color: #f1f1f1;
}
.container__item--sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
.container__item--add {
  width: 400px;
  position: relative;
  height: 200px;
  margin-top: 10px;
}
.container__item--fieldset {
  position: relative;
  left: 250px;
  right: 0;
  margin-left: 10px;
  margin-right: 10px;
  width: 400px;
  /* Need a specific value to work */
}
.container__item #butAd {
  vertical-align: middle;
  background-color: #4CAF50;
  /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 10px;
}
.container__item--para {
  display: block;
  margin: 10px 10px;
  font-size: 12px;
}
.container__item--category {
  display: block;
  margin: 10px 10px;
  font-size: 12px;
  font: bold;
}
.container__item--buttonBuy {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 10px;
  margin: 10px 10px;
  bottom: 50px;
  position: static;
}
.container__item--busketImage {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
}
.container__item--goods {
  display: flex;
  background-color: #03caca;
  left: 250px;
}
