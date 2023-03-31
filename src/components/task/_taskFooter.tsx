import { Box, Button, FormControlLabel, Switch } from "@mui/material"
import React, { FC, ReactElement } from "react"
import PropTypes from "prop-types"

import { ITaskFooter } from "./interfaces/ITaskFooter"

const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        control={<Switch onChange={(e) => onStatusChange(e)} color="warning" />}
        label="In Progress"
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: "#ffffff" }}
        onClick={(e) => onClick(e)}
      >
        Mark Complete
      </Button>
    </Box>
  )
}

export default TaskFooter

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
}
