import React from 'react';
import CryptoListPage from './pages/CryptoPage';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.root}>
      <main>
      <CryptoListPage />
      </main>
    </div>
  );
}

export default App;
