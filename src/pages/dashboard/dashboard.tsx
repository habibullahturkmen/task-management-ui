import React, { FC, ReactElement } from "react"
import { Grid } from "@mui/material"

const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <Grid item md={8} px={4}>
        <h2>Content Area</h2>
      </Grid>
      <Grid
        item
        md={4}
        sx={{
          height: "100vh",
          position: "fixed"
        }}
      >
        <h2>Sidebar Area</h2>
      </Grid>
    </Grid>
  )
}

export default Dashboard