import React, { useState } from "react"
import {
  Title,
  Label,
  Field,
  Control,
  Input,
  Select,
  TextArea,
  Button,
} from "bloomer"

import * as api from "../api"

const Feedback = () => {
  const [state, setState] = useState({
    accuracy: 0,
    averageReactionTime: 0,
    memoryTestGrade: "Good",
    diaryEntry: "",
  })
  const onSubmit = () => api.sendData(state).then(console.log)
  console.log(state)
  return (
    <div>
      <Title>Play Top Frag score</Title>
      <Field>
        <Label>Accuracy (%)</Label>
        <Control>
          <Input
            type="number"
            min={0}
            max={100}
            value={state.accuracy}
            onChange={e => setState({ ...state, accuracy: e.target.value })}
          />
        </Control>
      </Field>
      <Field>
        <Label>Average Reaction Time (ms)</Label>
        <Control>
          <Input
            type="number"
            min={0}
            value={state.averageReactionTime}
            onChange={e =>
              setState({ ...state, averageReactionTime: e.target.value })
            }
          />
        </Control>
      </Field>
      <Field>
        <Label>Memory Test Grade</Label>
        <Control>
          <Select
            value={state.memoryTestGrade}
            onChange={e =>
              setState({ ...state, memoryTestGrade: e.target.value })
            }
          >
            <option>Bad</option>
            <option>Average</option>
            <option>Good</option>
            <option>Great</option>
          </Select>
        </Control>
      </Field>
      <Field>
        <Label>Diary Entry</Label>
        <Control>
          <TextArea
            value={state.diaryEntry}
            onChange={e => setState({ ...state, diaryEntry: e.target.value })}
          />
        </Control>
      </Field>
      <Field>
        <Control>
          <Button isColor="primary" onClick={() => onSubmit()}>
            Submit
          </Button>
        </Control>
      </Field>
    </div>
  )
}

export default Feedback
