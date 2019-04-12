import React from "react"
import { Field, Label, Control, Input, Select, TextArea } from "bloomer"

const Feedback = props => (
  <form
    name="feedback"
    method="post"
    action="/success"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <Field>
      <Label>Accuracy (%)</Label>
      <Control>
        <Input type="number" />
      </Control>
    </Field>
    <Field>
      <Label>Average Reaction Time (ms)</Label>
      <Control>
        <Input type="number" />
      </Control>
    </Field>
    <Field>
      <Label>Memory Test Grade</Label>
      <Control>
        <Select>
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
        <TextArea />
      </Control>
    </Field>
  </form>
)

export default Feedback
