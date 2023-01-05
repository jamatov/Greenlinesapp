import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function HomeSearch() {
  return (
    <div className='HomeSearch pt-5'>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Поиск всего, что вы ищете…"
                aria-label="Поиск всего, что вы ищете…"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <FaSearch/>
              </Button>
            </InputGroup>
          </div>
        </div>

      </div>
    </div>
  )
}
