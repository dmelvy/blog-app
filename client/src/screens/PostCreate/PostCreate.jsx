import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout.jsx';
import Form from '../../components/Form.jsx';

import './PostCreate.css'


function PostCreate(props) {
  const [isCreated, setCreated] = useState(false)
  const history = useHistory();

  if (isCreated) {
    history.push('/');
}

  return (
    <Layout>
      <Form setHappened={setCreated}/>
  </Layout>
);
};

export default PostCreate