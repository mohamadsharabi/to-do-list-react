import { getDefaultNormalizer } from "@testing-library/react";
import { useState } from "react";

export default function Task({task}) {
  
  return (
    <>
      {task}
      <hr></hr>
    </>
  )
}