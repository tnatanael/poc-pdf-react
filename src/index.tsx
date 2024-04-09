import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const printDocument = () => {
  const input = document.getElementById('divToPrint') || new HTMLElement();
  html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0, 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    })
  ;
}

root.render(
  <React.StrictMode>
      <div id="divToPrint" className="mt4">
        <App />
      </div>
      <div className="mb5" style={{ marginTop: "30px" }}>
        <button onClick={printDocument}>Gerar PDF</button>
      </div>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
