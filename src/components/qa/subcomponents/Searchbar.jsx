import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function Searchbar({handleSearchChange, value}) {
  
  return (
    <div>
      <form>
        <TextField
          label="Have a question? Search for answers…"
          variant="outlined"
          fullWidth
          value={value}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </div>
  );
}

