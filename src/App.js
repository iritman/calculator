import React from "react";
import { useState } from "react";
import "./App.css";
import { Row, Col, Space, Switch } from "antd";
import { FaMoon as MoonIcon, FaSun as SunIcon } from "react-icons/fa";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onDarkModeChange = (checked) => {
    setIsDarkMode(checked);
  };

  const darkModeOnHeaderColor = "darkslateblue";
  const darkModeOnKeyPadColor = "navy";
  const darkModeOffHeaderColor = "skyblue";
  const darkModeOffKeyPadColor = "white";

  return (
    <div className="app">
      <Row className="app_calculator">
        <Col
          xs={24}
          style={{
            backgroundColor: isDarkMode
              ? darkModeOnHeaderColor
              : darkModeOffHeaderColor,
            paddingLeft: 10,
            paddingTop: 10,
          }}
        >
          <Space>
            <Switch size="small" onChange={onDarkModeChange} />

            {isDarkMode ? (
              <MoonIcon style={{ color: "white" }} />
            ) : (
              <SunIcon style={{ color: "white" }} />
            )}
          </Space>
        </Col>
        <Col
          xs={24}
          style={{
            backgroundColor: isDarkMode
              ? darkModeOnKeyPadColor
              : darkModeOffKeyPadColor,
          }}
        >
          Key pad
        </Col>
      </Row>
    </div>
  );
};

export default App;
