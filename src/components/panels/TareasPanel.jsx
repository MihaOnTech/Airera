import React, { useState } from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Checkbox,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Tareas = () => {
  const taskCategories = {
    mañana: [
      { id: 1, title: "Activar depuradora y robot", isCompleted: false },
      { id: 2, title: "Tomar medidas", isCompleted: false },
    ],
    tarde: [
      { id: 3, title: "Limpiar terraza y mesas", isCompleted: false },
      { id: 4, title: "Barrer baños", isCompleted: false },
    ],
    semanal: [
      { id: 5, title: "Revisar inventario", isCompleted: false },
      { id: 6, title: "Actualizar software", isCompleted: false },
    ]
  };

  const [tasks, setTasks] = useState(taskCategories);

  const handleCheck = (category, id) => {
    const updatedTasks = tasks[category].map(task => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks({ ...tasks, [category]: updatedTasks });
  };

  const categoryDoneCount = (category) => {
    return tasks[category].filter(task => task.isCompleted).length;
  };

  const isAllComplete = (category) => {
    return tasks[category].every(task => task.isCompleted);
  };

  const renderTasks = (category) => (
    tasks[category].map(task => (
      <Box key={task.id} display="flex" alignItems="center">
        <Checkbox isChecked={task.isCompleted} onChange={() => handleCheck(category, task.id)} mr={2}/>
        <Text>{task.title}</Text>
      </Box>
    ))
  );

  return (
    <Box padding={4} height="86vh">
      <Accordion allowToggle fontSize={"23px"}>
        {Object.keys(tasks).map(category => (
          <AccordionItem 
            key={category} 
            borderWidth="2px" 
            borderColor="black" 
            bg={useColorModeValue(isAllComplete(category) ? "green.100" : "red.100", 
            isAllComplete(category) ? "green.700" : "red.700")}
            fontSize={"23px"}>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold">
                {`${category.charAt(0).toUpperCase() + category.slice(1)} ${categoryDoneCount(category)}/${tasks[category].length}`}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} pl={4} pr={4} pt={2}>
              {renderTasks(category)}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default Tareas;
