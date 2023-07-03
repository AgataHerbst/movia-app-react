import { TextField } from "@mui/material";

const SearchBox = (props) => {
	return (
		<div className='col col-sm-4'>
			<TextField
			 label='search'
			 variant='outlined'
			 size="small"
			type='search' 
			value={props.value}
			onChange={(event) => props.setSearchValue(event.target.value)}
			placeholder='Type to search...'
			></TextField>
		</div>
	);
};

export default SearchBox;