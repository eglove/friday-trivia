import { useEffect, useState } from 'react';

export default function useForm(initial = {}): any {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join('');

  useEffect(() => {
    // This function runs when the things we are watching change
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e: any): void {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value, 10);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }

    setInputs({
      // copy the existing state
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

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
