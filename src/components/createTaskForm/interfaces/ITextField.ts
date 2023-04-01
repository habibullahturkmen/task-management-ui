import React from "react"

import { IDisabled } from "./IDisabled"

export interface ITextField extends IDisabled {
  value?: string
  onChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void
}
