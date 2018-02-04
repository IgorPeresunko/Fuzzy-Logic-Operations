import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'
import pure from 'recompose/pure'

const propTypes = {
	classes: PropTypes.object.isRequired
}

const Operation = ({
	classes,
	value,
	operations,
	onChange
}) => (
	<FormControl className={classes.formControl}>
		<InputLabel htmlFor="operation">Operation</InputLabel>
		<Select
			value={value}
			onChange={onChange}
			inputProps={{
				name: 'operation',
				id: 'operation',
			}}
		>{
			operations.map(item =>
				<MenuItem value={item} key={item}>{item}</MenuItem>)
		}</Select>
	</FormControl>
)

Operation.propTypes = propTypes

const styles = theme => ({
	formControl: {
		width: 225,
		marginTop: '10px',
		marginRight: '15px'
	}
})

export default pure(withStyles(styles)(Operation))