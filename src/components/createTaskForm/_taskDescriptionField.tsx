import React, { FC, ReactElement } from "react"
import { TextField } from "@mui/material"
import PropTypes from "prop-types"

import { ITextField } from "./interfaces/ITextField"

const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
  const {
    value = "",
    onChange = (event) => console.log(event),
    disabled = false,
  } = props
  return (
    <TextField
      id="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      value={value}
      size="small"
      multiline
      rows={4}
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  )
}

export default TaskDescriptionField

TaskDescriptionField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
}
