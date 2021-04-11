import { Autocomplete as MuiAutocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

/**
 *
 * @example
 * ```js
 * const options = [
 * 	{ title: 'The Shawshank Redemption', year: 1994 },
 * 	{ title: 'The Godfather', year: 1972 },
 * ];
 * ```
 *
 * @component
 * @param {...(import('@material-ui/lab').AutocompleteProps}
 */
const Autocomplete = ({
	options,
	onChange,
	label,
	inputAdornment,
	...rest
}) => {
	return (
		<MuiAutocomplete
			// id="combo-box-demo"
			onChange={onChange}
			options={options}
			getOptionLabel={option => option.title}
			style={{ width: 300 }}
			renderInput={params => (
				<TextField
					{...params}
					label={label}
					variant="outlined"
					// InputProps={{
					// 	...params.InputProps,
					// 	endAdornment: (
					// 		<>
					// 			{inputAdornment}
					// 			{params.InputProps.endAdornment}
					// 		</>
					// 	),
					// }}
				/>
			)}
			{...rest}
		/>
	);
};

export default Autocomplete;
