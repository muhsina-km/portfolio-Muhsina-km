import React from "react";
import "./Works.css";
import { Button } from "antd";

const works = [
  {
    title: "Flowering Plants Ecommerce Platform",
    description:
      "This ecommerce platform, built with the MERN stack, allows users to explore and purchase flowering plants. Users can view plant details, manage wishlists and carts, and place orders. On the admin side, admins can add plants, update stock, manage active/inactive products, and track customer orders. This project provides a complete solution for selling plants online, with easy management and a smooth shopping experience.",
    githubLinks: {
      userSide: "https://github.com/muhsina-km/bloomingbuds-userside",
      adminSide: "https://github.com/muhsina-km/bloomingbuds-adminside",
    },
  },
  {
    title: "Electric Shop Wholesale Price Calculator",
    description:
      "This web application allows customers to calculate the total price of electric products from a specific wholesale shop. Built with the MERN stack, it displays product prices and lets users select quantities to instantly calculate the total cost before visiting the shop. Ideal for wholesale buyers, this tool helps customers plan their purchases and get exact pricing in advance.",
    githubLink: "https://github.com/muhsina-km/electricshop",
  },
  {
    title: "Truth or Dare Game",
    description:
      "This is a simple and fun Truth or Dare game built with ReactJS. Users can choose between the Truth or Dare options and get random questions or dares. It’s an interactive web-based game where players can enjoy and challenge themselves with funny and interesting truths or dares. Ideal for parties or gatherings, this game brings a playful touch to any occasion.",
    githubLink: "https://github.com/muhsina-km/truthordare",
  },
];

const Work = () => {
  return (
    <div className="work-page" style={{ marginTop: "50px" }}>
      <h1 className="works-title">My Works</h1>
      <p>
        Here are some of the projects I created. Click the button below
        each project to view the code on GitHub.
      </p>
      <div className="work-cards">
        {works.map((work, index) => (
          <div key={index} className="work-card">
            <h3>{work.title}</h3>
            <p>{work.description}</p>
            {work.githubLinks ? (
              // If there are both user and admin links, display two buttons
              <>
                <Button
                  href={work.githubLinks.userSide}
                  type="success"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-button"
                >
                  View User Side on GitHub
                </Button>
                <Button
                  href={work.githubLinks.adminSide}
                  type="success"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-button"
                >
                  View Admin Side on GitHub
                </Button>
              </>
            ) : (
              // If only one link exists, display one button
              <Button
                href={work.githubLink}
                type="success"
                target="_blank"
                rel="noopener noreferrer"
                className="work-button"
              >
                View on GitHub
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
