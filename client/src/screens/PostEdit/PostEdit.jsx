import { useState } from "react";
import { useParams, useHistory } from 'react-router-dom';


import Layout from '../../components/shared/Layout/Layout.jsx';
import Form from '../../components/Form.jsx';

import './PostEdit.css';


function PostEdit(props) {
  const [isUpdated, setUpdated] = useState(false)

  return (
    <Layout>
      <Form setHappened={setUpdated}/>
  </Layout>
);
};

export default PostEdit