import React, { FC, ReactElement, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material"

import { ICreateTask } from "../taskArea/interfaces/ICreateTask"
import { sendApiRequest } from "../../helpers/sendApiRequest"
import TaskDescriptionField from "./_taskDescriptionField"
import TaskSelectField from "./_taskSelectField"
import TaskTitleField from "./_taskTitleField"
import TaskDateField from "./_taskDateField"
import { Priority } from "./enums/Priority"
import { Status } from "./enums/Status"
import dayjs, { Dayjs } from "dayjs"

const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(undefined)
  const [description, setDescription] = useState<string | undefined>(undefined)
  const [date, setDate] = useState<Dayjs | null>(dayjs())
  const [status, setStatus] = useState<string>(Status.todo)
  const [priority, setPriority] = useState<string>(Priority.normal)

  const createTaskMutation = useMutation((data: ICreateTask) =>
    sendApiRequest(
      process.env.VITE_API_URL || "http://localhost:3200/tasks",
      "POST",
      data,
    ),
  )

  function createTaskHandler() {
    if (!title || !date || !description) {
      return
    }

    const task = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    }

    createTaskMutation.mutate(task)
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Alert severity="success" sx={{ width: "100%", marginBottom: "16px" }}>
        <AlertTitle>Success</AlertTitle>
        The task has been created successfully
      </Alert>
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <TaskTitleField
          onChange={(e) => setTitle(e.target.value)}
          disabled={createTaskMutation.isLoading}
        />
        <TaskDescriptionField
          onChange={(e) => setDescription(e.target.value)}
          disabled={createTaskMutation.isLoading}
        />
        <TaskDateField
          value={date}
          onChange={(date) => setDate(date)}
          disabled={createTaskMutation.isLoading}
        />
        <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
          <TaskSelectField
            label="Status"
            name="status"
            value={status}
            disabled={createTaskMutation.isLoading}
            onChange={(e) => setStatus(e.target.value as string)}
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
              {
                value: Status.completed,
                label: Status.completed.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            value={priority}
            disabled={createTaskMutation.isLoading}
            onChange={(e) => setPriority(e.target.value as string)}
            items={[
              {
                value: Priority.low,
                label: Priority.low.toUpperCase(),
              },
              {
                value: Priority.normal,
                label: Priority.normal.toUpperCase(),
              },
              {
                value: Priority.high,
                label: Priority.high.toUpperCase(),
              },
            ]}
          />
        </Stack>
        {createTaskMutation.isLoading && <LinearProgress />}
        <Button
          disabled={!title || !date || !description || !status || !priority}
          onClick={createTaskHandler}
          variant="contained"
          size="large"
          fullWidth
        >
          Create A Task
        </Button>
      </Stack>
    </Box>
  )
}

export default CreateTaskForm
