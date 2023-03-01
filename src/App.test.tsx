import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('App', () => {
  test('renders popup component', async () => {
    render(<App />);
    const $b = screen.getByText('click here to show popup status success')
    userEvent.click($b)
    const $p = await screen.findByText('popup from parent component')
    expect($p).toBeInTheDocument()
  })
  test('dblClick popup length', async () => {
    render(<App />);
    const $b = screen.getByText('click here to show popup status success')
    userEvent.dblClick($b)
    const $p = await screen.findAllByText('popup from parent component')
    // eslint-disable-next-line jest/valid-expect
    expect($p.length === 1)
  })
})
