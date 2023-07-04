import { describe, it, expect, beforeAll } from "vitest";
import { VueWrapper, mount, shallowMount } from "@vue/test-utils";
import HelloWorld from "../components/HelloWorld.vue";

describe("My test", () => {
  let wrapper: VueWrapper<any>;
  beforeAll(async () => {
    // wrapper = mount(HelloWorld);

    wrapper = mount(HelloWorld);
  });

  it("my test", async () => {
    wrapper.vm.myCount = 5;
    // Assert
    // expect(wrapper.find("#my-stepper-value").text()).toBe("0");

    // Simulate
    await wrapper.find("#my-increment").trigger("click");
    await wrapper.vm.$nextTick();

    // Assert updated count value
    expect(wrapper.find("#my-stepper-value").text()).toBe("10");
  });
});
