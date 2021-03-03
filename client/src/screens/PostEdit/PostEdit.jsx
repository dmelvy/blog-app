import { useState } from "react";
import { useParams, useHistory } from 'react-router-dom';


import Layout from '../../shared/Layout/Layout.jsx';
import Form from '../../components/Form/Form.jsx';

import './PostEdit.css';


function PostEdit(props) {
  const [isUpdated, setUpdated] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  if (isUpdated) {
    history.push('/');
}

  return (
    <Layout>
      <Form setHappened={setUpdated} id={id}/>
  </Layout>
);
};

export default PostEdit