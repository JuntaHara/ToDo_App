import React, { useContext } from 'react';
import SettingContext from '../contexts/setting';
import { Link } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ColorTile from '../components/colorTile';

function Setting() {
  const { state, dispatch } = useContext(SettingContext);

  function handlerRadioChange(e, color) {
    dispatch(color);
  }

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '32px' }}>設定画面</h1>
      <Link to="/">top画面</Link>
      <FormControl margin='normal'>
        <FormLabel id="color-radio-buttons-group-label">
          <div style={{ display: 'flex' }}><span style={{ marginRight: '4px', color: 'black' }}>背景色: </span><ColorTile color={state.backgroundColor} /></div>
        </FormLabel>
        <RadioGroup
          aria-labelledby="color-radio-buttons-group-label"
          defaultValue={state.backgroundColor}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="white" control={<Radio />} label="white" onChange={e => handlerRadioChange(e, 'white')} />
          <FormControlLabel value="lightgray" control={<Radio />} label="lightgray" onChange={e => handlerRadioChange(e, 'lightgray')} />
          <FormControlLabel value="ivory" control={<Radio />} label="ivory" onChange={e => handlerRadioChange(e, 'ivory')} />
          <FormControlLabel value="azure" control={<Radio />} label="azure" onChange={e => handlerRadioChange(e, 'azure')} />
          <FormControlLabel value="peachpuff" control={<Radio />} label="peachpuff" onChange={e => handlerRadioChange(e, 'peachpuff')} />
        </RadioGroup>
      </FormControl>
    </div>
    );
  }

  export default Setting;

