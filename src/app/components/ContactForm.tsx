import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);
  };

  return (
    <form onSubmit={handleSubmit} className='mt-8'>
      <div className='mb-4'>
        <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
          Nome:
        </label>
        <input
          type='text'
          id='name'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
          Email:
        </label>
        <input
          type='email'
          id='email'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='message' className='block text-gray-700 font-bold mb-2'>
          Mensagem:
        </label>
        <textarea
          id='message'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
