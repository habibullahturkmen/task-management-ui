import React, { FC, ReactNode } from "react"

interface IComposeContext {
  components?: Array<FC<{ children?: ReactNode }>>
  children?: ReactNode | undefined
}
export default function ComposeContext(props: IComposeContext) {
  const { components = [], children } = props

  return (
    <>
      {components.reduceRight((accumulator, Component: any) => {
        return <Component>{accumulator}</Component>
      }, children)}
    </>
  )
}
