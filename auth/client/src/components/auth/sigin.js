import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Sigin extends Compoennt {
  render() {
    return (
      <form>
        <fieldset className='form-group'>
          <label htmlFor=''>Email:</label>
          <input type='text' className='form-control'/>
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input type='text' className='form-control'/>
        </fieldset>
        <button action='submit' className='btn btn-primary'>Sign In</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'sigin',
  fields: ['email', 'password']
})(Sigin);
