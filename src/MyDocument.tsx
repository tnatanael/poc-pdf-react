import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import App from './App';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

// Create Document Component
function MyDocument() {
    return (
      <PDFViewer style={styles.viewer}>
        <Document>
            <Page size="A4" style={styles.page}>
              <App />
            </Page>
        </Document>
      </PDFViewer>
    );
};

export default MyDocument;
