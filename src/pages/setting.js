import React from 'react';
import { Link } from "react-router-dom";

function Setting() {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '32px' }}>設定画面</h1>
      <Link to="/">top画面</Link>
    </div>
  );
  }

  export default Setting;

