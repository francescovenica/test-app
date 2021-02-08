import { shallow } from "enzyme";
import Card from "../";
import { Name, Parameter } from "../styles";

const DATA = {
  name: "test 1",
  height: 10,
  hyperdriveRating: 5,
};

describe("Card", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Card compareBy="height" {...DATA} />);
    expect(wrapper.find(Name).text()).toBe("test 1");
    expect(wrapper.find(Parameter).text("href")).toBe("height 10");
  });
  it("should render correctly when hyperdriveRating", () => {
    const wrapper = shallow(<Card compareBy="hyperdriveRating" {...DATA} />);
    expect(wrapper.find(Name).text()).toBe("test 1");
    expect(wrapper.find(Parameter).text("href")).toBe("hyperdriveRating 5");
  });
});
