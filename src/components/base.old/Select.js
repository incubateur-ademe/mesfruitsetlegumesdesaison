import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 1.5rem;
`
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`
const Input = styled.select`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.input};
  box-shadow: inset 0 -2px 0 0 ${(props) => props.theme.colors.main};
  border: none;
  border-radius: 0.25rem 0.25rem 0 0;
  appearance: none;
  background-repeat: no-repeat;
  background-position: calc(100% - 0.5rem) 50%;
  background-size: 1.5rem 1.5rem;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 24 24' ><path fill='%231e1e1e' d='M12,13.1l5-4.9l1.4,1.4L12,15.9L5.6,9.5l1.4-1.4L12,13.1z'/></svg>");
  cursor: pointer;
`
const Option = styled.option``
export default function Select(props) {
  return (
    <Wrapper>
      {props.label && <Label htmlFor={props.name}>{props.label}</Label>}
      <Input
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={(e) => {
          props.onChange({ value: e.currentTarget.value, name: props.name })
        }}
      >
        {props.options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Input>
    </Wrapper>
  )
}
