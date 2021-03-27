import React, { useState } from 'react';

// TODO use generics rather than any
export default function useForm(initial = {}): any {
  const [inputs, setInputs] = useState(initial);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    let { value, name, type } = event.target;

    if (type === 'number') {
      // @ts-ignore allow conversion
      value = parseInt(value, 10);
    }

    if (type === 'file') {
      // @ts-ignore allow conversion
      value[0] = event.target.files;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm(): void {
    setInputs(initial);
  }

  function clearForm(): void {
    const blankState = Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
