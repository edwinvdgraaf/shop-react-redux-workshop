import { shallow, mount } from "enzyme";
import React from "react";
import App from "./containers/app";

import mockProducts from "./products.json";

it("renders all products", () => {
  mockProducts.forEach(p => {
    const [price, fraction] = p.price.split(",");

    expect(
      mount(<App />).contains(<div className="product__title">{p.title}</div>)
    ).toBe(true);

    expect(
      mount(<App />).contains(
        <div className="product__price">
          {price},<sup className="product__price product__price--fraction">
            {fraction}
          </sup>
        </div>
      )
    ).toBe(true);
  });
});

describe("add product to basket", () => {
  it("starts with an empty basket", () => {
    expect(mount(<App />).find(".product--shopping-cart").exists()).toBe(false);
  });

  it("disables add to cart button when clicked", () => {
    const firstProductButton = mount(<App />)
      .find(".main")
      .find(".product")
      .find("button")
      .first();
    firstProductButton.simulate("click");
    expect(firstProductButton.getDOMNode().disabled).toBe(true);
  });

  it("adds product to basket when clicked", () => {
    const app = mount(<App />);
    app.find(".main").find(".product").first().find("button").simulate("click");
    expect(app.find(".product--shopping-cart").exists()).toBe(true);
  });
});

it("removes product from basket", () => {
  const app = mount(<App />);

  app.find(".main .product button").first().simulate("click");
  app.find(".product--shopping-cart button").first().simulate("click");

  expect(app.find(".main .product button").first().getDOMNode().disabled).toBe(
    false
  );
  expect(app.find(".product--shopping-cart").exists()).toBe(false);
});

it("updates the basket header", () => {
  const app = mount(<App />);

  expect(app.find(".header__basket").text().match("0")).toBeTruthy();

  app.find(".main .product button").first().simulate("click");

  expect(app.find(".header__basket").text().match("1")).toBeTruthy();
});
