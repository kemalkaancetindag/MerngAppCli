import React, { useState, Fragment } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import { Button, Confirm, Icon } from "semantic-ui-react";

const DeleteButton = ({postId}) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    update(proxy, result) {
      setConfirmOpen(false);
      //TODO:Remove post from cache
    },
    variables: {
      postId,
    },
  });
  return (
    <Fragment>
      <Button
        as="div"
        color="red"
        floated="right"
        onClick={() => setConfirmOpen(true)}
      >
        <Icon name="trash" style={{ margin: 0 }} />
      </Button>
      <Confirm
        open={confirmOpen}
        onCancel={() => {
          setConfirmOpen(false);
        }}
        onConfirm={deletePost}
      />
    </Fragment>
  );
};

const DELETE_POST_MUTATION = gql`
    mutation deletePost($postId:ID!){
        deletePost(postId:$postId)
            
        
    }
`;

export default DeleteButton;
