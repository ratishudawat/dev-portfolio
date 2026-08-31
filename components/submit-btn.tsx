import React from 'react';
import { useFormStatus } from 'react-dom';

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='mt-1 w-fit rounded-md bg-neutral-900 px-5 py-2.5 text-sm text-neutral-50 transition-colors hover:bg-neutral-700 disabled:opacity-60 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300'
      disabled={pending}
    >
      {pending ? 'Sending…' : 'Send'}
    </button>
  );
}
