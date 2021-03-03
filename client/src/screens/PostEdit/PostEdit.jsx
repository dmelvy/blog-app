import { useState } from "react";
import { useParams, useHistory } from 'react-router-dom';


import Layout from '../../shared/Layout/Layout.jsx';
import Form from '../../components/Form/Form.jsx';

import './PostEdit.css';


function PostEdit(props) {
  const [isUpdated, setUpdated] = useState(false);
  const history = useHistory();
<<<<<<< HEAD
  const { id } = useParams();
console.log(id)
=======
  const {id} = useParams();

>>>>>>> a206dae358a85ba2373f1a859b79e2a49d000ffa
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