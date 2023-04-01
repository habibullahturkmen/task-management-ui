import { Box, Grid, Alert, LinearProgress } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import React, { FC, ReactElement } from "react"
import { format } from "date-fns"

import { sendApiRequest } from "../../helpers/sendApiRequest"
import TaskCounter from "../taskCounter/taskCounter"
import { ITaskApi } from "./interfaces/ITaskApi"
import { Task } from "../task/task"

const TaskArea: FC = (): ReactElement => {
  const { error, isLoading, data, refetch } = useQuery(["tasks"], async () => {
    return await sendApiRequest<Array<ITaskApi>>(
      process.env.VITE_API_URL || "http://localhost:3200/tasks",
      "GET",
    )
  })

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status Of your Tasks As On {format(new Date(), "PPPP")}</h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          <>
            {error && (
              <Alert severity="error">
                There was an error fetching your tasks
              </Alert>
            )}
            {!error && Array.isArray(data) && data.length === 0 && (
              <Alert severity="warning">
                You do not have any tasks created yet. Start by creating some
                tasks.
              </Alert>
            )}
            {isLoading ? (
              <LinearProgress />
            ) : (
              Array.isArray(data) &&
              data.length > 0 &&
              data.map((each, index) => {
                return (
                  <Task
                    key={index + each.id}
                    id={each.id}
                    title={each.title}
                    date={new Date(each.date)}
                    description={each.description}
                    priority={each.priority}
                    status={each.status}
                  />
                )
              })
            )}
          </>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TaskArea
