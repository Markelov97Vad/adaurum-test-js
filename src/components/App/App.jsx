import Helper from "../Helper/Helper";
import Files from "../Files/Files";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./App.module.scss";
import { useState } from "react";
import { getDate } from "../../utils";

function App() {
  const [dataMediaplan, setDataMediaplan] = useState([]);
  const [dataReport, setDataReport] = useState([]);

  const orderMediaplan = () => {
    return fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(() => {
        setDataMediaplan(() => [
          ...dataMediaplan, 
          { 
            id: dataMediaplan.length + 1, 
            name: 'Companyname' , 
            count: `${dataMediaplan.length + 1}/23`,
            date: getDate()
          }
        ])
        setDataMediaplan((dataMediaplan) => dataMediaplan.sort((dataA, dataB) => {
          return Number(dataB.count.split('/')[0]) - Number(dataA.count.split('/')[0])
        }))
      })
      .catch(err => console.log(err))
  }

  const orderReport = () => {
    return fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(() => {
        setDataReport(() => [
          ...dataReport, 
          { 
            id: dataReport.length + 1, 
            name : 'Companyname' , 
            count: `${dataReport.length + 1}/23`,
            date: getDate()
          }
        ])
        setDataReport((dataReport) => dataReport.sort((dataA, dataB) => {
          return Number(dataB.count.split('/')[0]) - Number(dataA.count.split('/')[0])
        }))
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Header/>
      <main className={styles. main}>
        <Files dataMediaplan={dataMediaplan} dataReport={dataReport}/>
        <Helper orderMediaplan={orderMediaplan} orderReport={orderReport} dataMediaplan={dataMediaplan} dataReport={dataReport}/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
