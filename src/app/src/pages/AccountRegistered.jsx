import { ChevronLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axiosInstance from '../utilities/axios-instance.js';
import Button from 'react-bootstrap/Button';

export default function AccountRegistered() {

  return <>
    <Link to="/register">
      <Button variant="outline-secondary" className="border-0">
        <ChevronLeft /><span className="ms-2">Back</span>
      </Button>
    </Link>
    <p className="mt-3">
      Your account has been registered successfully! You may now <Link
      to="/login"
      className="text-decoration-none"
    >sign in</Link>.</p>
  </>
}
