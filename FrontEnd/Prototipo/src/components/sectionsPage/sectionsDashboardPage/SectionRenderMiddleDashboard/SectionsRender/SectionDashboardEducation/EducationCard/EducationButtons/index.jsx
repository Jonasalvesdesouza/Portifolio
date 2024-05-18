import React from "react";
import { BiPencil, BiTrash } from "react-icons/bi"
import { Button } from "../../../../../../../fragments"

export const EducationButtons = (
    { 
        education, 
        setIsOpen, 
        setEditEducation, 
        educationDelete, 
        setLoading,
        loading 
    }
) => {
  const buttons = [
    {
      type: "edit",
      icon: <BiPencil size={18} color="black" />,
      action: () => {
        setIsOpen(true);
        setEditEducation(education);
      },
    },
    {
      type: "delete",
      icon: loading ? "Loading..." : <BiTrash size={18} color="black" /* color="#e8e9ea" */ />,
      action: () => educationDelete(education.id, setLoading),
    },
  ];

  return (
    <div>
      {buttons.map((btn, index) => (
        <Button key={index} onClick={btn.action}>
          {btn.icon}
        </Button>
      ))}
    </div>
  );
};
