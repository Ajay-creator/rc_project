import React from "react";
import Header from "./Header";
import "./PostPage.css";
import moment from "moment";
import { Card, Icon, Avatar, Col, Typography } from "antd";
const { Title } = Typography;


function PostPage(props) {
  console.log(props.location.state.blog);
  const post = props.location.state.blog.data;
  return (
    <div>
      <Header />
      <div className="postPage" style={{ width: "80%", margin: "3rem auto" }}>
        {/* <Title level={2}>{post.title}</Title>
        <br />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Title level={4}>
            {moment(post.data.created.toDate()).calendar()}
          </Title>
        </div> */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <br/> <hr/>
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default PostPage;
