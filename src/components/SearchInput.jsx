import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

export const SearchInput = ({ value, onChange }) => {
  return (
    <Form className="mt-3 mr-3">
      <div style={{ position: 'relative' }}>
        <FormControl
          type="text"
          placeholder="Search"
          style={{
            borderRadius: '20px',
            width: '350px',
          }}
          value={value}
          onChange={onChange}
        />
      </div>
    </Form>
  );
}

