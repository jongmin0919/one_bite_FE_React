import React from 'react';
import { useParams } from 'react-router-dom';

export default function Edit() {
  const params = useParams();
  
  return <div>{params.id}번 일기입니다.</div>;
}
