import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import React, { FC, ReactElement } from "react"
import dayjs from "dayjs"
import PropTypes from "prop-types"

import { IDateField } from "./interfaces/IDateField"

const TaskDateField: FC<IDateField> = (props): ReactElement => {
  const {
    value = dayjs(),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Task Date"
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </LocalizationProvider>
    </>
  )
}

export default TaskDateField

TaskDateField.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
}
