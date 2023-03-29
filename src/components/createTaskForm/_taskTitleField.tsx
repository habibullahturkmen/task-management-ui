import React, { FC, ReactElement } from "react"
import { TextField } from "@mui/material"
import PropTypes from "prop-types"

import { ITextField } from "./interfaces/ITextField"

const TaskTitleField: FC<ITextField> = (props): ReactElement => {
  const { onChange = (event) => console.log(event), disabled = false } = props
  return (
    <TextField
      id="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  )
}

export default TaskTitleField

TaskTitleField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
}
