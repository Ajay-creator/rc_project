import React from "react";
import "./Blogs.css";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import BlogCard from "./BlogCard";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect, useState } from "react";

// import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
// import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.makeblock.com/wp-content/uploads/2018/08/mbot_1080720_banner.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
  title: { textAlign: "left" },
}));

function Blogs() {
  console.log("from funtion");
  const classes = useStyles();
  const [blogs, setBlogs] = useState([]);
  const ref = db.collection("Blogs");
  const [{}, dispatch] = useStateValue();
  function getblogs() {
    ref
      .get()
      .then((querySnapshot) => {
        setBlogs(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        // var items = [];
        // querySnapshot.forEach((doc) => {
        //   // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());
        //   items.push(doc);
        //   console.log("items are -> ", items);
        // });
        // setBlogs(items);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    console.log("this is from blogs list ", blogs);
    blogs.map((blog) => console.log(blog.data.created.toDate().toString()));
    dispatch({
      type: "SET_BLOGS",
      blogs: blogs,
    });
  }
  useEffect(() => {
    getblogs();
  }, []);
  return (
    <div className="blogs">
      <Box className={classes.hero}>
        <Box className={classes.title}>Blogs</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          {/* for looop here  */}
          {blogs?.map((blog) => (
            <BlogCard blog="blog" />
          ))}
          {/* loop ends here */}
        </Grid>
        {/* for pagination below is the coede snippet */}
        {/* <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box> */}
      </Container>

      <Footer />
    </div>
  );
}

export default Blogs;
