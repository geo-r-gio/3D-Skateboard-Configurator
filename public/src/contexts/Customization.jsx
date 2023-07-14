import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const tapeColors = [
    {
        color: "#896599",
        name: "mauve",
    },
    {
      color: "#1a5e1a",
      name: "green",
    },
    {
      color: "#659994",
      name: "blue",
    },
    {
      color: "#604a39",
      name: "brown",
    },
    {
      color: "#ffa500",
      name: "orange",
    },
    {
      color: "#59555b",
      name: "grey",
    },
    {
      color: "#222222",
      name: "black",
    },
    {
      color: "#ececec",
      name: "white",
    },
  ];
  
export const wheelColors = [
    {
      color: "#896599",
      name: "mauve",
    },
    {
      color: "#1a5e1a",
      name: "green",
    },
    {
      color: "#659994",
      name: "blue",
    },
    {
        color: "#604a39",
        name: "brown",
    },
    {
      color: "#ffa500",
      name: "orange",
    },
    {
      color: "#59555b",
      name: "grey",
    },
    {
      color: "#222222",
      name: "black",
    },
    {
      color: "#ececec",
      name: "white",
    },
  ];

export const CustomizationProvider = (props) => {
    const [shape, setShape] = useState(1);
    const [tapeColor, setTapeColor] = useState(tapeColors[0]);
    const [wheelColor, setWheelColor] = useState(wheelColors[0]);
    return ( 
    <CustomizationContext.Provider 
        value={{
            shape,
            setShape,
            tapeColor,
            setTapeColor,
            wheelColor,
            setWheelColor,
        }}>
        {props.children}
    </CustomizationContext.Provider>
    )
}

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
}