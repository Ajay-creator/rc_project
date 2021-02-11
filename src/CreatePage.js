import React, { useEffect, useState } from "react";
import "./CreatePage.css";
import TextField from "@material-ui/core/TextField";
import QuillEditor from "./QuillEditor";
import { useHistory } from "react-router-dom";
import { Typography, Button, Form, message } from "antd";
// import axios from "axios";
import { useSelector } from "react-redux";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";
// import { indigo } from "@material-ui/core/colors";
import { db } from "./firebase";
import { Card, Icon, Avatar, Col } from "antd";

function CreatePage(props) {
  const { Title } = Typography;
  const history = useHistory();
  //   const user = useSelector((state) => state.user);
  const [{ user }, dispatch] = useStateValue();
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const onEditorChange = (value) => {
    setContent(value);
    console.log("from this page only ", content);
  };

  const onFilesChange = (files) => {
    setFiles(files);
    console.log("files area --> ", files);
  };
  const updateTitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("from onsubmit buttoni");
    if (!user) {
      return alert("please log in first");
    }

    const variables = {
      title: title,
      content: content,
      userID: user?.uid,
    };
    console.log("The content is ", content);
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    db.collection("Blogs")
      .doc(title)
      .set({
        author: user?.email,
        title: title,
        content: content,
        created: timestamp,
      })
      .then((docRef) => {
        alert("success fully posted");
      })
      .catch((error) => {
        alert(
          "There was an error in posting the blog please try again or later"
        );
      });
    history.replace("/orders");
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <Title level={2}> Editor</Title>
      </div>
      <div className="title_input">
        <TextField
          onChange={updateTitle}
          id="filled-basic"
          variant="filled"
          label="Enter Blog Title"
        />
      </div>

      <QuillEditor
        placeholder={title}
        onEditorChange={onEditorChange}
        onFilesChange={onFilesChange}
        user={user}
      />

      <Form>
        <div style={{ textAlign: "center", margin: "2rem" }}>
          <Button
            size="large"
            htmlType="submit"
            className=""
            onClick={onSubmit}
          >
            Submit
          </Button>
        </div>
      </Form>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        style={{ backgroundColor: "yellow", width: "100%", height: "500px" }}
      ></div>
    </div>
  );
}

export default CreatePage;
