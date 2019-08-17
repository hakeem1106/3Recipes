import React from "react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../containers/blogpage.css';

const BlogPage = () => {
  return (
    <div className="blog-page-background">
      <Navigation />
      <div className="blog-container">
        <h1 className="title">Site Updates</h1>
        {/* Blog posts are static at the moment, but would like to make the */}
        {/* information available to be input via form and posted to site */}
        <div className="blog-post">
            <p className="date">August 17, 2019</p>
            <p className="blog-post">Updated favicon to match the branding of the page. Finished setting up a modal for the recipes page that can be stylized later once the website becomes more dynamic. Working on layout for the HomePage.js currently.</p>
            <p className="update-time">Last updated: 8:43AM EST</p>
            <hr />
        </div>
        <div className="blog-post">
            <p className="date">August 15, 2019</p>
            <p className="blog-post">Updates include: adding this blog page, adding a footer   with links to the projects Github page, fixed the branding image and recipe images so that they are now showing, and removed styles from the homepage.js to the blogpage.js.</p>
            <p className="update-time">Last updated: 12:23PM EST</p>
            <hr />
        </div>
        <div className="blog-post">
            <p className="date">August 13, 2019</p>
            <p className="blog-post">Consider adding login and register buttons to the landing page, a comments section for the blog posts, adding markdown option for blogposts, adding button to open a form to submit a blog post, and setting up an overlay for selected receipes on the recipes page.</p>
            <p className="update-time">Last updated: 3:15PM EST</p>
            <hr />
        </div>
        <div className="blog-post">
            <p className="date">August 10, 2019</p>
            <p className="blog-post">Once user login is implemented, think about implementing administrative accounts which would have access to add and edit blog posts</p>
            <p className="update-time">Last updated: 8:45PM EST</p>
            <hr />
        </div>
        <div className="blog-post">
            <p className="date">August 8, 2019</p>
            <p className="blog-post">This bottom post is just to take up space and show how the blog posts will line up and be styled. This random sentence is just a placehodler for text.</p>
            <p className="update-time">Last updated: 9:25AM EST</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
