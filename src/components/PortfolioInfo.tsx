/** @jsxImportSource theme-ui */

import { useEffect, useState, useContext } from "react";
import { Box, Flex, Text } from "theme-ui";
import PortfolioInfoDetails from "./PortfolioInfoDetails";
import PortfolioInfoMenu from "./PortfolioInfoMenu";

const details = {
  home: {
    heading:
      "Welcome to my homepage, learn the inner workings of a full stack developer",
    description:
      "I love leaning into new tech and incorporating my learnings into my developer flow, but I also appreciate the stability and merit of long standing paradigms. I am currently working on a few projects that I am excited to share with you. I am always open to new opportunities and would love to hear from you.",
    graphicText: "Powered by Passion and Enthusiasm",
  },
  details: {
    heading: "Self taught full stack developer, with a lifelime learning mindset",
    description:
      "I spend most of my days plugging away at code, learning new things to inspire my future endeavors, and working on projects that I am passionate about. I often have many ideas and projects I want to dive into, but also make sure I am focusing on taking the task at hand to completion. By having a variety of interests in the broader fields of development, I often fill my free time with new learning opportunities to ensure development stays fresh.",
    graphicText: "Inspired by Passion and Enthusiasm",
  },
  portfolio: {
    heading: "See what I have been up to!",
    description:
      "Below of some of the projects I have been involved with. My contributions vary from project to project, but I am always looking to learn and grow. From front end to back end, I am often caught in the middle contributing to both, with an emphasis on the front end. Check out my works below, and feel free to reach out to me if you have any questions. Maybe try one of games I was involved in creating! Thanks for stopping by and checking things out!",
    graphicText: "Preceded by Vision and Determination",
  },
  resume: {
    heading: "My Resume, my work history, and my skillset oh my!",
    description:
      "I made my way into the development in a non-traditional, but common way. I began my college life wanting to be a developer, but transitioned to another industry focus, worked in different industries since then, until I found myself back in the development world with a renewed passion and focus. Diving into the self taught world of development, I have been able to learn and grow at my own pace, and I am excited to see where my journey takes me and how I can contribute to taking ideas to functional products.",
    graphicText: "Built by Challenge, Conviction",
  },
  contact: {
    heading: "Get in touch! Let's grow together!",
    description:
      "If you have any questions, comments, or concerns, please feel free to reach out to me. I am always open to new opportunities and would love to hear from you.",
    graphicText: "Contact by Email or Social",
  },
};

type PortfolioInfoProps = {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
};

const PortfolioInfo = ({ activeTab, setActiveTab }: PortfolioInfoProps) => {
  const [activeDetails, setActiveDetails] = useState({
    heading: "",
    description: "",
    graphicText: "",
  });
  useEffect(() => {
    console.log(activeTab);
    switch (activeTab) {
      case "Home":
        setActiveDetails({
          heading: details.home.heading,
          description: details.home.description,
          graphicText: details.home.graphicText,
        });
        break;
      case "Details":
        setActiveDetails({
          heading: details.details.heading,
          description: details.details.description,
          graphicText: details.details.graphicText,
        });
        break;
      case "Portfolio":
        setActiveDetails({
          heading: details.portfolio.heading,
          description: details.portfolio.description,
          graphicText: details.portfolio.graphicText,
        });
        break;
      case "Resume":
        setActiveDetails({
          heading: details.resume.heading,
          description: details.resume.description,
          graphicText: details.resume.graphicText,
        });
        break;
      case "Contact":
        setActiveDetails({
          heading: details.contact.heading,
          description: details.contact.description,
          graphicText: details.contact.graphicText,
        });
        break;
      default:
        setActiveDetails({
          heading: details.home.heading,
          description: details.home.description,
          graphicText: details.home.graphicText,
        });
        break;
    }
  }, [activeTab]);

  return (
    <Box mt={['-75px', 0]}>
      <PortfolioInfoMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      <PortfolioInfoDetails
        heading={activeDetails.heading}
        description={activeDetails.description}
        graphicText={activeDetails.graphicText}
      />
    </Box>
  );
};

export default PortfolioInfo;
