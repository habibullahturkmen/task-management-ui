import { Avatar, Box, Typography } from "@mui/material"
import React, { FC, ReactElement } from "react"
import PropTypes from "prop-types"

import { emitCorrectBorderColor } from "./helpers/emitCorrectBorderColor"
import { emitCorrectLabel } from "./helpers/emitCorrectLabel"
import { ITaskCounter } from "./interfaces/ITaskCounter"
import { Status } from "../createTaskForm/enums/Status"

const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  const { status = Status.completed, count = 0 } = props
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          backgroundColor: "transparent",
          border: "5px solid",
          width: "96px",
          height: "96px",
          marginBottom: "16px",
          borderColor: `${emitCorrectBorderColor(status)}`,
        }}
      >
        <Typography variant="h4" color="#ffffff">
          {count}
        </Typography>
      </Avatar>
      <Typography
        color="#ffffff"
        fontWeight="bold"
        fontSize="20px"
        variant="h5"
      >
        {emitCorrectLabel(status)}
      </Typography>
    </Box>
  )
}

export default TaskCounter

TaskCounter.propTypes = {
  status: PropTypes.oneOf([Status.todo, Status.inProgress, Status.completed]),
  count: PropTypes.number,
}
