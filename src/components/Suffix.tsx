/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

function Suffix() {
  const [email, setEmail] = useState('');

  return (
    <form>
      <h3>Data Input</h3>
      <div data-testid="codeit-img">
        <img src="codeit.jpg" alt="codeit-img" />
      </div>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="color">Color</label>
      <input id="color" type="text" placeholder="type color" />
      <button title="click when you are ready to submit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Suffix;
