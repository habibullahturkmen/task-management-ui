import React, { FC, ReactElement } from "react"
import { Box, Typography } from "@mui/material"
import PropTypes from "prop-types"

import { ITaskDescription } from "./interfaces/ITaskDescription"

const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
  const { description = "Lorem ipsum dolar sit amet" } = props
  return (
    <Box>
      <Typography variant="h6">{description}</Typography>
    </Box>
  )
}

export default TaskDescription

TaskDescription.propTypes = {
  description: PropTypes.string,
}
