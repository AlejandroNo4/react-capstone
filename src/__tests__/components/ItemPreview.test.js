import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow, mount } from "enzyme";
import ItemPreview from "../../components/ItemPreview";

let component;

beforeEach(() => {
  const id = "12345";
  const name = "Test";
  const srcImg = "TestURL";
  component = shallow(<ItemPreview id={id} name={name} srcImg={srcImg} />);
});

describe("Item Preview component", () => {
  it("Render the component without errors", () => {
    const item = component.find("li");
    expect(item.length).toBe(1);
  });

  it("Check correct usage for ID props", () => {
    const findId = component.find("Link");
    expect(findId.prop("to")).toBe("/item/12345");
  });

  it("Check correct usage for NAME props", () => {
    const name = component.find(".name-preview");
    expect(name.text()).toBe("Test");
  });

  it("Check correct usage for URL props", () => {
    const image = component.find("img");
    expect(image.prop("src")).toBe("TestURL");
  });

  it("Check INCORRECT usage for ID props", () => {
    const findId = component.find("Link");
    expect(findId.prop("to")).not.toBe("");
  });

  it("Check INCORRECT usage for NAME props", () => {
    const name = component.find(".name-preview");
    expect(name.text()).not.toBe("");
  });

  it("Check INCORRECT usage for URL props", () => {
    const image = component.find("img");
    expect(image.prop("src")).not.toBe("");
  });
});
