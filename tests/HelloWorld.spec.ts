import { describe, it, expect, beforeAll } from "vitest";
import { VueWrapper, mount, shallowMount } from "@vue/test-utils";
import HelloWorld from "../components/HelloWorld.vue";

describe("My test", () => {
  let wrapper: VueWrapper<any>;
  beforeAll(async () => {
    // wrapper = mount(HelloWorld);

    wrapper = shallowMount(HelloWorld);
  });

  it("should increase myCount by multiply 2", async () => {
    wrapper.vm.myCount = 2;
    // Assert
    // expect(wrapper.find("#my-stepper-value").text()).toBe("0");

    // Simulate
    await wrapper.find("#my-increment").trigger("click");
    await wrapper.vm.$nextTick();

    // Assert
    // expect(wrapper.find("#my-stepper-value").text()).toBe("10");
    expect(wrapper.vm.myCount).toBe(4);
  });

  it("should return full name", async () => {
    const result = wrapper.vm.getFullName("iron", "man");

    expect(result).toBe("iron man");
  });
});
